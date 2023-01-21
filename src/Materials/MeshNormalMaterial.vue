<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
A material that maps the normal vectors to RGB colors.
</docs>

<script lang="ts">
export default {
  name: "MeshNormalMaterial",
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import { FrontSide, Mesh, type Side, MeshNormalMaterial, Material } from "three";

export interface Props {
  /**
   * Defines which side of faces will be rendered - front, back or both. Represtented by `THREE.Side`.
   */
  side?: Side;

  /**
   * Name of the material
   */
  name?: string;

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
  name: "",
});

const three = new MeshNormalMaterial();
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const addMaterial = inject("addMaterial") as (g: Material) => void;
addMaterial(three);

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.material = three;
}

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
