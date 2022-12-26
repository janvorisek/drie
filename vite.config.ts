import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export const vueDocsPlugin = () => ({
  name: "vue-docs",
  transform(code: any, id: any) {
    if (!/vue&type=docs/.test(id)) return;
    return `export default ''`;
  },
});

export default defineConfig({
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
    }),
    vueDocsPlugin(),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "umd"],
      // the name expose in umd mode
      name: pkg.name,
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "three"],
      output: {
        globals: {
          vue: "Vue",
          three: "three",
        },
      },
    },
  },
});
