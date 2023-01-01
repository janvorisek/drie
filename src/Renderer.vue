<template>
  <slot></slot>
  <canvas ref="canvas"> </canvas>
</template>

<script setup lang="ts">
import { onMounted, provide, type Ref, ref, watch } from "vue";

import { Camera, Scene, WebGLRenderer } from "three";

export interface Props {
  /**
   * Name of the active camera when using multiple cameras
   */
  camera?: string;

  /**
   * Flag marking whether renderer auto resizes to match parent dimensions
   */
  autoResize?: boolean;

  /**
   * Callback to fire before each animation frame is rendered
   */
  onBeforeRender?: () => void;

  /**
   * Whether to perform antialiasing.
   */
  antialias?: boolean;

  /**
   * If set, use shadow maps in the scene.
   */
  shadowMapEnabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  autoResize: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBeforeRender: () => {},
  antialias: false,
  shadowMapEnabled: false,
});

let renderer: WebGLRenderer | null = null;

const scenes: Scene[] = [];

let activeCamera: Camera | null = null;
const cameras = ref<Camera[]>([]);

const controls = ref<Ref<{ update: () => void; enabled: boolean; object: Camera }>[]>([]);

const canvas = ref<HTMLCanvasElement>();
provide("canvas", canvas);

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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    activeCamera = findCamera;
  } else {
    activeCamera = cameras.value[0];
  }
};

function applyProps(props: Props) {
  if (renderer === null) return;

  renderer.shadowMap.enabled = props.shadowMapEnabled as boolean;
}

onMounted(() => {
  renderer = new WebGLRenderer({ canvas: canvas.value, antialias: props.antialias });
  renderer.setSize(1, 1);

  applyProps(props);

  // Check if camera set by name
  setCamera(props.camera);

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      if (renderer && props.autoResize) renderer.setSize(el.contentRect.width, el.contentRect.height);
    });
  });

  myObserver.observe(canvas.value!.parentElement as Element);

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

applyProps(props);
watch(
  () => props.shadowMapEnabled,
  () => applyProps(props),
);

provide("addCamera", (c: Camera) => cameras.value.push(c));
provide("addScene", (s: Scene) => scenes.push(s));

//provide("controls", controls);
provide("addControls", (controlsRef: any) => controls.value.push(controlsRef));

defineExpose({ three: renderer });
</script>
