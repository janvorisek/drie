<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.

  Multiple scenes can be used to create a picture-in-picture effect.
</docs>

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
watch(
  () => props.background,
  () => applyProps(props),
);

defineExpose({ three });
</script>
