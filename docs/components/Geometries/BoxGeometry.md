# BoxGeometry

  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  </script>

BoxGeometry is a component for a rectangular cuboid with a given `width`, `height`, and `depth`. The cuboid is centred on the origin, with each edge parallel to one of the axes.

Any modifications to the `width`, `height`, `depth`, `widthSegments`, `heightSegments` and `depthSegments` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <BoxGeometry />
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
          <MeshNormalMaterial />
          <BoxGeometry :width="6" :height="4" :depth="2" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, BoxGeometry, MeshNormalMaterial } from "@janvorisek/drie";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>
```

:::


## Props

| Prop name      | Description                          | Type   | Default |
| -------------- | ------------------------------------ | ------ | ------- |
|` name           `| Name of the geometry                 | string | ""      |
|` width          `| Width along the X axis               | number | 1       |
|` height         `| Height along the Y axis              | number | 1       |
|` depth          `| Depth along the Z axis               | number | 1       |
|` widthSegments  `| Number of segments along the X axis. | number | 1       |
|` heightSegments `| Number of segments along the Y axis. | number | 1       |
|` depthSegments  `| Number of segments along the Z axis. | number | 1       |

---

