<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "OrthographicCamera",
};
</script>

<docs>
  <script setup>
  import OrthographicCamera from '../../examples/OrthographicCamera.vue'
  </script>

  ## Example

  <ClientOnly>
  <OrthographicCamera />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { OrthographicCamera } from "three";
import { inject, onMounted, provide } from "vue";

const props = defineProps<{
  name?: string;
}>();

const three = new OrthographicCamera(-30, 30, 30, -30, 0.1, 1000);

three.position.set(10, 10, 10);
three.lookAt(0, 0, 0);
three.updateProjectionMatrix();

(inject("addCamera") as (c: OrthographicCamera) => void)(three);

onMounted(() => {
  if (props.name) three.name = props.name;
});

provide("parentCamera", three);

defineExpose({ three });
</script>
