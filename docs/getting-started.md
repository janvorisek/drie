# Getting started

## Installation

Drie can be installed from npm and always supports the latest THREE.js version.

```shell
npm install drie three #latest Drie & THREE.js
```

## Usage

The preffered way is to import the components as needed in the single file components.

```vue
<script setup lang="ts">
import { ref } from "vue";

import { Renderer, Scene } from "drie"; // always needed
import { Mesh, BoxGeometry, MeshBasicMaterial } from "drie"; // mesh
import { PerspectiveCamera, OrbitControls } from "drie"; // camera

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>

<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot">
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>
```

## Vue 3 plugin

You can use Vue3 plugin to auto-import all the components.

Note that tree shaking is not available and the resulting bundle size may be huge.

```ts
import { createApp } from "vue";
import { install as installDrie } from 'drie';
import App from "./App.vue";

const app = createApp(App);
installDrie(app);
app.mount("#app");
```