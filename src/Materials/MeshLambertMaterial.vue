<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "MeshLambertMaterial",
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import { FrontSide, Mesh, type Side, Color, MeshLambertMaterial } from "three";

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
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  side: FrontSide,
  opacity: 1,
  transparent: false,
});

const mesh = inject("mesh") as Mesh;

const three = new MeshLambertMaterial();
mesh.material = three;

function applyProps(props: Props) {
  if (props.color) three.color = new Color(props.color);
  if (props.side) three.side = props.side;
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

watch(
  () => props.side,
  () => applyProps(props),
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

provide("material", three);

defineExpose({ three });
</script>
