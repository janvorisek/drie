# PlaneGeometry

  <script setup>
  import PlaneGeometry from '../../examples/PlaneGeometry.vue'
  </script>

PlaneGeometry is a component for a rectangular plane with a given `width` and `height`. The plane is centred on the origin, with each edge parallel to the X and Y axes.

Any modifications to the `width`, `height`, `widthSegments` and `heightSegments` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <PlaneGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot">
          <MeshNormalMaterial :side="DoubleSide" />
          <PlaneGeometry :width="8" :height="6" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, PlaneGeometry, MeshNormalMaterial } from "@janvorisek/drie";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>
```

:::


## Props

| Prop name      | Description                                                         | Type   | Default |
| -------------- | ------------------------------------------------------------------- | ------ | ------- |
|` name           `| Name of the geometry                                                | string | ""      |
|` width          `| Width along the X axis.                                             | number | 1       |
|` height         `| Height along the Y axis.                                            | number | 1       |
|` widthSegments  `| Number of segmented rectangular faces along the width of the sides. | number | 1       |
|` heightSegments `| Number of segmented rectangular faces along the height of the sides | number | 1       |

---

