<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject } from "vue";

import { AxesHelper, Scene } from "three";
import { handleVectorProp } from "../utils";
import { Vector3Like } from "../types";

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
   * Size of the lines representing the axes.
   */
  size?: number;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local scale.
   */
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

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

provide("mesh", three);

defineExpose({ three });
</script>
