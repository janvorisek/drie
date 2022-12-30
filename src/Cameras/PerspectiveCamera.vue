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
import { onMounted, inject, type Ref, provide, watch } from "vue";
import { handleVectorProp } from "../utils";
import { type Vector3Like } from "../types";

export interface Props {
  /**
   * Camera name
   */
  name?: string;
  /**
   * Camera up vector
   */
  up?: Vector3Like;
  /**
   * Camera position
   */
  position?: Vector3Like;
  /**
   * Camera target
   */
  lookAt?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  up: () => [0, 1, 0],
  position: () => [0, 0, 0],
  lookAt: () => [0, 0, 0],
});

const three = new PerspectiveCamera(75, (window.innerWidth / window.innerHeight) * 1000, 0.1, 1000);

(inject("addCamera") as (c: PerspectiveCamera) => void)(three);

const canvas = inject<Ref<HTMLCanvasElement>>("canvas");

onMounted(() => {
  if (props.name) three.name = props.name;

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((el) => {
      three.aspect = el.contentRect.width / el.contentRect.height;
      three.updateProjectionMatrix();
    });
  });

  myObserver.observe(canvas!.value);
});

handleVectorProp(props, "position", three);
handleVectorProp(props, "up", three);
handleVectorProp(props, "lookAt", three);

function applyProps(props: Props) {
  //
}

applyProps(props);
watch(props, () => applyProps(props));

provide("parentCamera", three);

defineExpose({ three });
</script>
