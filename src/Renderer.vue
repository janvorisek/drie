<template>
  <slot></slot>
  <canvas ref="canvas"> </canvas>
</template>

<docs>BEGIN_DOCS
  This component manages [`THREE.WebGLRenderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer). It is the main component containing cameras and scenes.

  ## Features

  Drie provides some of the common features not contained in three.js by default.

  ### Renderer auto resize

  Modern web is based on complex responsive layouts. Drie allows you to make your renderer canvas responsive. It is based on ResizeObserver watching renderer's parent element dimensions.
  
  It can be disabled using the `autoResize` prop. When disabled, you are required to provide `width` and`height` prop.

  ### Frame limiter

  Frame limiter may increase performance of your scenes. The limit defaults to `60` FPS.
  
  It can be disabled by setting the `frameLimit` prop to `-1`.
</docs>

<script setup lang="ts">
import { onMounted, provide, type Ref, ref, watch, onUnmounted, reactive } from "vue";

import { BufferGeometry, Camera, Scene, WebGLRenderer } from "three";
import { disposeTHREEObject } from "./utils";

export interface Props {
  /**
   * Name of the active camera when using multiple cameras.
   */
  camera?: string;

  /**
   * Flag marking whether the renderer auto resizes to match parent dimensions.
   */
  autoResize?: boolean;

  /**
   * Callback to fire before each animation frame is rendered.
   * This is typically used for animations.
   * Use this instead of `window.setInterval`.
   */
  onBeforeRender?: () => void;

  /**
   * Whether to perform antialiasing.
   */
  antialias?: boolean;

  /**
   * Set FPS limit for the renderer.
   * Use `-1` to disable frame limitter.
   */
  frameLimit?: number;

  /**
   * Controls the default clear alpha value.
   */
  alpha?: boolean;

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
  frameLimit: 60,
  alpha: false,
  shadowMapEnabled: false,
});

let renderer: WebGLRenderer | null = null;

const scenes: Scene[] = [];
const geometries = reactive<BufferGeometry[]>([]);

let activeCamera = ref<Camera | null>(null);
const cameras = ref<Camera[]>([]);

const controls = ref<Ref<{ update: () => void; enabled: boolean; object: Camera }>[]>([]);

const canvas = ref<HTMLCanvasElement>();
provide("canvas", canvas);

let then = Date.now();
let fpsInterval = 1000 / props.frameLimit;

watch(
  () => props.camera,
  (newCamera) => setCamera(newCamera),
);

// Set camera by string
const setCamera = (newCamera?: string) => {
  if (newCamera) {
    const findCamera = cameras.value.find((c) => c.name === newCamera);
    if (findCamera === undefined) activeCamera.value = null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    activeCamera.value = findCamera;
  } else {
    activeCamera.value = cameras.value[0];
  }
};

function applyProps(props: Props) {
  if (renderer === null) return;

  renderer.shadowMap.enabled = props.shadowMapEnabled as boolean;
  fpsInterval = 1000 / (props.frameLimit as number);
}

onMounted(() => {
  renderer = new WebGLRenderer({ canvas: canvas.value, antialias: props.antialias, alpha: props.alpha });
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

onUnmounted(() => {
  for (let scene of scenes) disposeTHREEObject(scene);
});

function animate() {
  requestAnimationFrame(animate);

  const now = Date.now();
  const elapsed = now - then;

  if (fpsInterval > -1 && elapsed < fpsInterval) {
    return;
  }

  then = now - (elapsed % fpsInterval);

  if (props.onBeforeRender) props.onBeforeRender();

  if (controls.value.length > 0 && activeCamera.value) {
    for (const ctrl of controls.value) {
      if (ctrl.value === null) continue;

      if (ctrl.value.object.uuid === activeCamera.value.uuid) {
        ctrl.value.enabled = true;
        ctrl.value.update();
      } else {
        ctrl.value.enabled = false;
      }
    }
  }

  if (activeCamera.value && renderer) for (const scene of scenes) renderer.render(scene, activeCamera.value);
}

applyProps(props);

watch(
  () => props.shadowMapEnabled,
  () => applyProps(props),
);

watch(
  () => props.frameLimit,
  () => applyProps(props),
);

provide("addCamera", (c: Camera) => cameras.value.push(c));
provide("addScene", (s: Scene) => scenes.push(s));

provide("addGeometry", (s: BufferGeometry) => geometries.push(s));
provide("getGeometry", (c: string) => geometries.find((g) => g.name === c));

//provide("controls", controls);
provide("addControls", (controlsRef: any) => controls.value.push(controlsRef));

provide("camera", activeCamera);

defineExpose({ three: renderer });
</script>
