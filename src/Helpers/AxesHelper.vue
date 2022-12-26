<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject } from "vue";

import { AxesHelper, Scene } from "three";
import { handlePositionProp, handleRotationProp } from "../utils";
import { Vector3Like } from "../types";

export interface Props {
  size?: number;
  position?: Vector3Like;
  rotation?: Vector3Like;
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  size: 1,
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const scene = inject("scene") as Scene;

const three = new AxesHelper(props.size);
scene.add(three);

handlePositionProp(props, three);
handleRotationProp(props, three);

provide("mesh", three);

defineExpose({ three });
</script>
