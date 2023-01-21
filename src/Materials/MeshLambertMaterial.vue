<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
A material for non-shiny surfaces, without specular highlights.
</docs>

<script lang="ts">
export default {
  name: "MeshLambertMaterial",
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import { FrontSide, Mesh, type Side, Color, MeshLambertMaterial, Material } from "three";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;

  /**
   * Name of the material
   */
  name?: string;

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
  name: "",
});

const three = new MeshLambertMaterial();
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const addMaterial = inject("addMaterial") as (g: Material) => void;
addMaterial(three);

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.material = three;
}

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
