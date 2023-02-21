<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "OrthographicCamera",
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import OrthographicCamera from '../../examples/OrthographicCamera.vue'
  </script>

  This component manages [`THREE.OrthographicCamera`](https://threejs.org/docs/#api/en/cameras/OrthographicCamera).

  ## Example

  <ClientOnly>
  <OrthographicCamera />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { OrthographicCamera } from "three";
import { inject, provide, type Ref, watch } from "vue";
import { Vector3Like } from "../types";
import { handlePropCallback, handleVectorProp } from "../utils";

export interface Props {
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
  position: () => [0, 0, 0],
  lookAt: () => [0, 0, 0],
  far: 2000,
  near: 0.1,
});

const three = new OrthographicCamera(-10, 10, 10, -10, 0.1, 1000);

three.lookAt(0, 0, 0);
three.updateProjectionMatrix();

(inject("addCamera") as (c: OrthographicCamera) => void)(three);

const canvas = inject<Ref<HTMLCanvasElement>>("canvas");

watch(canvas!, () => {
  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      const aspect = el.contentRect.width / el.contentRect.height;
      three.left = three.bottom * aspect;
      three.right = three.top * aspect;
      three.updateProjectionMatrix();
    });
  });

  myObserver.observe(canvas!.value);
});

function applyProps() {
  three.name = props.name;
  three.near = props.near;
  three.far = props.far;

  three.updateProjectionMatrix();
}

applyProps();

handleVectorProp(props, "position", three, true, applyProps);
handleVectorProp(props, "up", three, true, applyProps);
handleVectorProp(props, "lookAt", three, true, applyProps);

handlePropCallback(props, "name", applyProps);
handlePropCallback(props, "near", applyProps);
handlePropCallback(props, "far", applyProps);

provide("parentCamera", three);

defineExpose({ three });
</script>
