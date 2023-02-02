# Getting started

## Installation

Drie can be installed from npm and always supports the latest `three.js` version.

```shell
npm install @janvorisek/drie three #latest Drie & three.js
```

If you are using typescript, don't forget to install `three.js` typings.

```shell
npm install --save-dev @types/three
```

::: info
You are supposed to install `three.js` yourself.
:::

## Vue 3 plugin

You can use Vue3 plugin to auto-import all the components.

```ts
import { createApp } from "vue";
import drie from '@janvorisek/drie';
import App from "./App.vue";

const app = createApp(App);
app.use(drie);
app.mount("#app");
```

## Import what you need

You can import the components as needed in the single file components.

```vue
<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie"; // always needed
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@janvorisek/drie"; // mesh
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"; // camera
</script>

<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>
```
