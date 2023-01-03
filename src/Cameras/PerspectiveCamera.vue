<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "PerspectiveCamera",
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import PerspectiveCamera from '../../examples/PerspectiveCamera.vue'
  </script>

  This component manages [`THREE.PerspectiveCamera`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera).

  ## Example

  <ClientOnly>
  <PerspectiveCamera />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { PerspectiveCamera } from "three";
import { onMounted, inject, type Ref, provide } from "vue";
import { handleVectorProp, handlePropCallback } from "../utils";
import { type Vector3Like } from "../types";

export interface Props {
  /**
   * Camera frustum aspect ratio, usually the canvas width / canvas height.
   */
  aspect?: number;

  /**
   * Flag marking whether camera aspect ration recalculates on renderer resize.
   */
  autoResize?: boolean;

  /**
   * Camera frustum far plane.
   * Must be greater than the current value of near plane.
   */
  far?: number;

  /**
   * Camera target
   */
  lookAt?: Vector3Like;

  /**
   * Camera name
   */
  name?: string;

  /**
   * Camera frustum near plane.
   * The valid range is greater than 0 and less than the current value of the far plane.
   * Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera's near plane.
   */
  near?: number;

  /**
   * Camera position
   */
  position?: Vector3Like;

  /**
   * Camera up vector
   */
  up?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  up: () => [0, 1, 0],
  autoResize: true,
  position: () => [0, 0, 0],
  lookAt: () => [0, 0, 0],
  aspect: 1,
  far: 2000,
  near: 0.1,
});

const three = new PerspectiveCamera(75, (window.innerWidth / window.innerHeight) * 1000, 0.1, 1000);

(inject("addCamera") as (c: PerspectiveCamera) => void)(three);

const canvas = inject<Ref<HTMLCanvasElement>>("canvas");

onMounted(() => {
  if (props.name) three.name = props.name;

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      if (!props.autoResize) return;

      three.aspect = el.contentRect.width / el.contentRect.height;
      three.updateProjectionMatrix();
    });
  });

  myObserver.observe(canvas!.value);
});

handleVectorProp(props, "position", three);
handleVectorProp(props, "up", three);
handleVectorProp(props, "lookAt", three);

function applyProps() {
  if (!props.autoResize) three.aspect = props.aspect;

  three.near = props.near;
  three.far = props.far;

  three.updateProjectionMatrix();
}

applyProps();

handlePropCallback(props, "aspect", applyProps);
handlePropCallback(props, "near", applyProps);
handlePropCallback(props, "far", applyProps);
//watch(props, () => applyProps(props));

provide("parentCamera", three);

defineExpose({ three });
</script>
