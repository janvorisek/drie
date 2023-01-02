<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { BufferGeometry, Mesh, MeshBasicMaterial, Scene } from "three";
import { Vector3Like } from "../types";
import { handleVectorProp } from "../utils";

export interface Props {
  /**
   * A [Vector3Like](/types#vector3like) representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;

  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

  /**
   * Whether the material receives shadows.
   */
  receiveShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  castShadow: false,
  receiveShadow: false,
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new MeshBasicMaterial();

const three = new Mesh(geometry, material);
three.castShadow = true;
three.receiveShadow = true;
scene.add(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function applyProps(props: Props) {
  three.castShadow = props.castShadow as boolean;
  three.receiveShadow = props.receiveShadow as boolean;
}

applyProps(props);

watch(
  () => props.castShadow,
  () => applyProps(props),
);

watch(
  () => props.receiveShadow,
  () => applyProps(props),
);

provide("mesh", three);

defineExpose({ three });
</script>
