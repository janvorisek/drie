import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export const vueDocsPlugin = () => ({
  name: "vue-docs",
  transform(code: any, id: any) {
    if (!/vue&type=docs/.test(id)) return;
    return `export default ''`;
  },
});

export default defineConfig({
  root: "./",
  // keep the same name as your github repos
  mode: "production",
  plugins: [vue(), vueDocsPlugin()],
  build: {
    outDir: "./dist-demo",
  },
});
