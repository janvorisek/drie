<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ name?: string }>();
const name = props.name || ref<string>("MyComponent");
</script>

<template>
  <div>
    Hello, this is <mark>{{ name }}</mark>
  </div>
</template>
