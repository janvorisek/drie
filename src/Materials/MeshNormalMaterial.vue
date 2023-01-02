<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "MeshNormalMaterial",
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import { FrontSide, Mesh, type Side, MeshNormalMaterial } from "three";

export interface Props {
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
  side: FrontSide,
  opacity: 1,
  transparent: false,
});

const mesh = inject("mesh") as Mesh;

const three = new MeshNormalMaterial();
mesh.material = three;

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

provide("material", three);

defineExpose({ three });
</script>
