# BufferGeometry

  <script setup>
    import BufferGeometry from '../../examples/BufferGeometry.vue'
  </script>

A representation of mesh, line, or point geometry. Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers.

Indexed buffer geometry will be used if non-empty `faces` prop is provided.

Any modifications to the `vertices` and `faces` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <BufferGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer :antialias="true" :frame-limit="30">
      <PerspectiveCamera :position="[3, 3, 3]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :position="[1, 1, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <BufferGeometry :vertices="vertices" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, BufferGeometry, MeshNormalMaterial } from "@janvorisek/drie";

// Flat array of 3 faces, may be updated
const vertices = reactive<number[]>([
  -1.0,
  -1.0,
  2.0,
  1.0,
  -1.0,
  0.0,
  1.0,
  1.0,
  1.0,
  -1.0,
  -1.0,
  2.0,
  1.0,
  -1.0,
  0.0,
  1.0,
  -2.0,
  1.0,
  1.0,
  1.0,
  1.0,
  -1.0,
  1.0,
  1.0,
  -1.0,
  -1.0,
  2.0,
]);
</script>
```

:::


## Props

| Prop name | Description                                                                                                                                                           | Type   | Default     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
|` name      `| Name of the geometry.                                                                                                                                                 | string | ""          |
|` vertices  `| Flat array of vertex coordinates.                                                                                                                                     | Array  | [] |
|` faces     `| Flat array of triangular faces.<br/>Indexed [THREE.BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry) will be used if non-empty array is provided. | Array  | [] |
|` uvs       `| Flat array of vertex UVs.                                                                                                                                             | Array  | [] |

---

