<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "MeshBasicMaterial",
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import MeshBasicMaterial from '../../examples/MeshBasicMaterial.vue'
  </script>

  A material for drawing geometries in a simple shaded (flat or wireframe) way.

  This material is not affected by lights.

  ## Example

  <ClientOnly>
  <MeshBasicMaterial />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, provide } from "vue";

import { FrontSide, Mesh, type Side, Color, MeshBasicMaterial } from "three";
import { handlePropCallback } from "../utils";

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

function applyProps() {
  if (props.color !== undefined) three.color = new Color(props.color);
  three.side = props.side;
  three.opacity = props.opacity;
  three.transparent = props.transparent;
  three.vertexColors = props.vertexColors;

  three.needsUpdate = true;
}

applyProps();

provide("material", three);

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "side", applyProps);
handlePropCallback(props, "opacity", applyProps);
handlePropCallback(props, "transparent", applyProps);
handlePropCallback(props, "vertexColors", applyProps);

defineExpose({ three });
</script>
