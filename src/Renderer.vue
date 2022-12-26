<template>
  <slot></slot>
  <canvas ref="canvas"> </canvas>
</template>

<script setup lang="ts">
import { onMounted, provide, type Ref, ref, watch } from "vue";

import { Camera, Scene, WebGLRenderer } from "three";

export interface Props {
  camera?: string;
  autoResize?: boolean;
  onBeforeRender?: () => void;
  //Standard THREE.WebGLRenderer props
  antialias?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  autoResize: true,
  onBeforeRender: () => {},
  antialias: false,
});

let renderer: WebGLRenderer | null = null;

const scenes: Scene[] = [];

let activeCamera: Camera | null = null;
const cameras = ref<Camera[]>([]);

const controls = ref<Ref<{ update: () => void }>[]>([]);

const canvas = ref<HTMLCanvasElement>();

let then = Date.now();
const fpsInterval = 1000 / 30;

watch(
  () => props.camera,
  (newCamera) => setCamera(newCamera),
);

// Set camera by string
const setCamera = (newCamera?: string) => {
  if (newCamera) {
    const findCamera = cameras.value.find((c) => c.name === newCamera);
    if (findCamera === undefined) activeCamera = null;

    activeCamera = findCamera;
  } else {
    activeCamera = cameras.value[0];
  }
};

onMounted(() => {
  renderer = new WebGLRenderer({ canvas: canvas.value, antialias: props.antialias });
  renderer.setSize(1, 1);

  // Check if camera set by name
  setCamera(props.camera);

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      if (renderer && props.autoResize) renderer.setSize(el.contentRect.width, el.contentRect.height);
    });
  });

  myObserver.observe(canvas!.value?.parentElement);

  animate();
});

function animate() {
  requestAnimationFrame(animate);

  const now = Date.now();
  const elapsed = now - then;

  if (elapsed < fpsInterval) {
    return;
  }

  then = now - (elapsed % fpsInterval);

  if (props.onBeforeRender) props.onBeforeRender();

  if (controls.value.length > 0 && activeCamera) {
    for (const ctrl of controls.value) {
      if (ctrl.value === null) continue;
      if (ctrl.value.object.uuid === activeCamera.uuid) {
        ctrl.value.enabled = true;
        ctrl.value.update();
      } else {
        ctrl.value.enabled = false;
      }
    }
  }

  if (activeCamera && renderer) for (const scene of scenes) renderer.render(scene, activeCamera);
}

function applyProps(props: any) {
  //
}

applyProps(props);
watch(props, () => applyProps(props));

provide("canvas", canvas);

provide("addCamera", (c: Camera) => cameras.value.push(c));
provide("addScene", (s: Scene) => scenes.push(s));

//provide("controls", controls);
provide("addControls", (controlsRef: any) => controls.value.push(controlsRef));

defineExpose({ three: renderer });
</script>
