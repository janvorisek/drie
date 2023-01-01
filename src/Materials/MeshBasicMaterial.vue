<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "MeshBasicMaterial",
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import { FrontSide, Mesh, type Side, Color, MeshBasicMaterial } from "three";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;

  /**
   * Defines which side of faces will be rendered - front, back or both. Represtented by `THREE.Side`.
   */
  side?: Side;

  /**
   * Float in the range of `0.0 - 1.0` indicating how transparent the material is.
   */
  opacity?: number;

  /**
   * Defines whether this material is transparent.
   */
  transparent?: boolean;

  /**
   * Defines whether vertex coloring is used.
   */
  vertexColors?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  side: FrontSide,
  opacity: 1,
  transparent: false,
  vertexColors: false,
});

const mesh = inject("mesh") as Mesh;

const three = new MeshBasicMaterial();
mesh.material = three;

watch(
  () => props.color,
  () => {
    if (props.color !== undefined) three.color = new Color(props.color);
  },
  { immediate: true },
);

watch(
  () => props.side,
  () => {
    three.side = props.side;
  },
  { immediate: true },
);

watch(
  () => props.opacity,
  () => {
    three.opacity = props.opacity;
  },
  { immediate: true },
);

watch(
  () => props.transparent,
  () => {
    three.transparent = props.transparent;
  },
  { immediate: true },
);

watch(
  () => props.vertexColors,
  () => {
    three.vertexColors = props.vertexColors;
  },
  { immediate: true },
);

provide("material", three);

defineExpose({ three });
</script>
