<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { Color, Scene } from "three";

const props = defineProps<{
  background?: any;
}>();

const three = new Scene();

provide("scene", three);

(inject("addScene") as (s: Scene) => void)(three);

function applyProps(props: any) {
  if (props.background) three.background = new Color(props.background);
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
