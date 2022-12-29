<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "PerspectiveCamera",
};
</script>

<docs>
  <script setup>
  import PerspectiveCamera from '../../examples/PerspectiveCamera.vue'
  </script>

  ## Example

  <ClientOnly>
  <PerspectiveCamera />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { PerspectiveCamera } from "three";
import { onMounted, inject, type Ref, provide, watch } from "vue";
import { vector3LikeToVector3 } from "../utils";
import { type Vector3Like } from "../types";

export interface Props {
  name?: string;
  up?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  up: () => [0, 1, 0],
});

const three = new PerspectiveCamera(75, (window.innerWidth / window.innerHeight) * 1000, 0.1, 1000);

three.position.set(10, 10, 10);
three.lookAt(0, 0, 0);
three.updateProjectionMatrix();

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

function applyProps(props: any) {
  const up = vector3LikeToVector3(props.up);
  three.up.set(up.x, up.y, up.z);
}

applyProps(props);
watch(props, () => applyProps(props));

provide("parentCamera", three);

defineExpose({ three });
</script>
