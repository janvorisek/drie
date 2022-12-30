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
import { inject, onMounted, provide, watch } from "vue";
import { Vector3Like } from "../types";
import { handleVectorProp } from "../utils";

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

const three = new OrthographicCamera(-30, 30, 30, -30, 0.1, 1000);

three.lookAt(0, 0, 0);
three.updateProjectionMatrix();

(inject("addCamera") as (c: OrthographicCamera) => void)(three);

onMounted(() => {
  if (props.name) three.name = props.name;
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
