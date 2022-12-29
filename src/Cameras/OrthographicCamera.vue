<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "OrthographicCamera",
};
</script>

<docs>
  <script setup>
  import OrthographicCamera from '../../examples/OrthographicCamera.vue'
  </script>

  ## Example

  <ClientOnly>
  <OrthographicCamera />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { OrthographicCamera } from "three";
import { inject, onMounted, provide, watch } from "vue";
import { Vector3Like } from "../types";
import { vector3LikeToVector3 } from "../utils";

export interface Props {
  name?: string;
  up?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  up: () => [0, 1, 0],
});

const three = new OrthographicCamera(-30, 30, 30, -30, 0.1, 1000);

three.position.set(10, 10, 10);
three.lookAt(0, 0, 0);
three.updateProjectionMatrix();

(inject("addCamera") as (c: OrthographicCamera) => void)(three);

onMounted(() => {
  if (props.name) three.name = props.name;
});

function applyProps(props: any) {
  const up = vector3LikeToVector3(props.up);
  three.up.set(up.x, up.y, up.z);
}

applyProps(props);
watch(props, () => applyProps(props));

provide("parentCamera", three);

defineExpose({ three });
</script>
