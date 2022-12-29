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
  color?: string | number;
  side?: Side;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  side: FrontSide,
});

const mesh = inject("mesh") as Mesh;

const three = new MeshLambertMaterial();
mesh.material = three;

function applyProps(props: Props) {
  if (props.color) three.color = new Color(props.color);
  if (props.side) three.side = props.side;
}

applyProps(props);
watch(props, () => applyProps(props));

provide("material", three);

defineExpose({ three });
</script>
