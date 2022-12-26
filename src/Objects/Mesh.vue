<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject } from "vue";

import { BufferGeometry, Mesh, MeshBasicMaterial, Scene } from "three";
import { Vector3Like } from "../types";
import { handlePositionProp, handleRotationProp, handleScaleProp } from "../utils";

export interface Props {
  position?: Vector3Like;
  rotation?: Vector3Like;
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new MeshBasicMaterial();

const three = new Mesh(geometry, material);
scene.add(three);

handlePositionProp(props, three);
handleRotationProp(props, three);
handleScaleProp(props, three);

provide("mesh", three);

defineExpose({ three });
</script>
