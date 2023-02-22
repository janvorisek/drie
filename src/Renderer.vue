<template>
  <canvas ref="canvas"> </canvas>
  <slot></slot>
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

  ::: warning Note
  Browser will usually limit the frame rate to 60 FPS.
  :::
</docs>

<script setup lang="ts">
import { onMounted, provide, type Ref, ref, watch, onUnmounted, reactive } from "vue";

import { BufferGeometry, Camera, Material, Scene, WebGLRenderer } from "three";
import { disposeTHREEObject } from "./utils";

import EventBus from "./EventBus";

export interface Props {
  /**
   * Controls the default clear alpha value.
   */
  alpha?: boolean;

  /**
   * Whether to perform antialiasing.
   */
  antialias?: boolean;

  /**
   * Flag marking whether the renderer auto resizes to match parent dimensions.
   */
  autoResize?: boolean;

  /**
   * Name of the active camera when using multiple cameras.
   */
  camera?: string;

  /**
   * Height of the renderer.
   * Specify if autoResize if disabled.
   */
  height?: number;

  /**
   * Set FPS limit for the renderer.
   * Use `-1` to disable frame limitter.
   */
  frameLimit?: number;

  /**
   * Callback to fire before each animation frame is rendered.
   * This is typically used for animations.
   * Use this instead of `window.setInterval`.
   */
  onBeforeRender?: () => void;

  /**
   * Callback to fire after each animation frame is rendered.
   */
  onAfterRender?: () => void;

  /**
   * If set, use shadow maps in the scene.
   */
  shadowMapEnabled?: boolean;

  /**
   * Width of the renderer.
   * Specify if autoResize if disabled.
   */
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  autoResize: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBeforeRender: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAfterRender: () => {},
  antialias: false,
  frameLimit: 60,
  alpha: false,
  shadowMapEnabled: false,
  width: 0,
  height: 0,
});

let renderer = ref<WebGLRenderer | null>(null);

const scenes: Scene[] = [];

const geometries = reactive<BufferGeometry[]>([]);
const materials = reactive<Material[]>([]);

let activeCamera = ref<Camera | null>(null);
const cameras = ref<Camera[]>([]);

const controls = ref<Ref<{ update: () => void; enabled: boolean; object: Camera }>[]>([]);

const canvas = ref<HTMLCanvasElement>();
provide("canvas", canvas);

let allControlsEnabled = true;
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

function applyProps() {
  if (renderer.value === null) return;

  renderer.value.shadowMap.enabled = props.shadowMapEnabled as boolean;
  fpsInterval = 1000 / (props.frameLimit as number);

  if (!props.autoResize) {
    renderer.value.setSize(props.width, props.height);
  }
}

onMounted(() => {
  renderer.value = new WebGLRenderer({ canvas: canvas.value, antialias: props.antialias, alpha: props.alpha });
  renderer.value.setSize(1, 1);

  applyProps();

  // Check if camera set by name
  setCamera(props.camera);

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      if (renderer.value && props.autoResize) renderer.value.setSize(el.contentRect.width, el.contentRect.height);
    });
  });

  myObserver.observe(canvas.value!.parentElement as Element);

  animate();
});

onUnmounted(() => {
  for (let scene of scenes) disposeTHREEObject(scene);
});

function animate() {
  if (renderer.value === null) return requestAnimationFrame(animate);

  const now = Date.now();
  const elapsed = now - then;

  if (fpsInterval > -1 && elapsed < fpsInterval) {
    return requestAnimationFrame(animate);
  }

  then = now - (elapsed % fpsInterval);

  if (props.onBeforeRender) props.onBeforeRender();

  if (controls.value.length > 0 && activeCamera.value) {
    for (const ctrl of controls.value) {
      if (ctrl.value === null) continue;

      if (ctrl.value.object.uuid === activeCamera.value.uuid) {
        ctrl.value.enabled = allControlsEnabled; //true;
        ctrl.value.update();
      } else {
        ctrl.value.enabled = false;
      }
    }
  }

  if (activeCamera.value && renderer) for (const scene of scenes) renderer.value.render(scene, activeCamera.value);

  if (props.onAfterRender) props.onAfterRender();

  requestAnimationFrame(animate);
}

applyProps();

watch(
  () => props.shadowMapEnabled,
  () => applyProps(),
);

watch(
  () => props.frameLimit,
  () => applyProps(),
);

watch(
  () => props.width,
  () => applyProps(),
);

watch(
  () => props.height,
  () => applyProps(),
);

provide("addCamera", (c: Camera) => cameras.value.push(c));
provide("addScene", (s: Scene) => scenes.push(s));

provide("addGeometry", (s: BufferGeometry) => geometries.push(s));
provide("getGeometry", (c: string) => geometries.find((g) => g.name === c));

provide("addMaterial", (s: Material) => materials.push(s));
provide("getMaterial", (c: string) => materials.find((g) => g.name === c));

//provide("controls", controls);
provide("addControls", (controlsRef: any) => controls.value.push(controlsRef));

provide("enableAllControls", () => {
  allControlsEnabled = true;
});

provide("disableAllControls", () => {
  allControlsEnabled = false;
});

provide("camera", activeCamera);

defineExpose({
  /**
   * You can access the managed `THREE.WebGLRenderer` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <Renderer ref="renderer"> ... </Renderer>
   * ```
   *
   * ```ts
   * const renderer = ref(null);
   *
   * onMounted(() => {
   * // Do something with the THREE.WebGLRenderer instance
   * const threeRenderer = renderer.value.three;
   * })
   * ```
   */
  three: renderer,

  eventBus: EventBus,
});
</script>
