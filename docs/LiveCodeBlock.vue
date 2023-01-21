<template>
  <div class="`language-${props.lang}`">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">{{ langName }}</span>
    <div v-html="code"></div>
  </div>
</template>

<script lang="ts" setup>
import { Highlighter, getHighlighter } from "shiki";
import { watch, ref, computed } from "vue";

export interface Props {
  code?: string;

  lang?: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
  lang: "ts",
});

const langName = computed(() => {
  if (props.lang === "vue-html") return "template";
  return props.lang;
});

const code = ref("");

let highlighter: Highlighter | null = null;

const update = async () => {
  if (!highlighter)
    highlighter = await getHighlighter({
      theme: "material-palenight",
      langs: ["ts", "vue-html"],
      paths: {
        themes: "/themes",
        languages: "/languages",
        wasm: "/",
      },
    });

  code.value = highlighter.codeToHtml(props.code, { lang: props.lang });
};

watch(
  () => props.code,
  () => {
    update();
  },
  { immediate: true },
);
</script>
