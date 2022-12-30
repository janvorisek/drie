<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { Color, Scene } from "three";

export interface Props {
  /**
   * Defines the background color of the scene.
   */
  background?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  background: 0xffffff,
});

const three = new Scene();

provide("scene", three);

(inject("addScene") as (s: Scene) => void)(three);

function applyProps(props: Props) {
  if (props.background) three.background = new Color(props.background);
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
