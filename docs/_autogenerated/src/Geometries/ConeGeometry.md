# ConeGeometry

## Props

| Prop name      | Description                                                                                                              | Type    | Values | Default      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- | ------ | ------------ |
| name           | Name of the geometry.                                                                                                    | string  | -      | ""           |
| radius         | Radius of the circle.                                                                                                    | number  | -      | 1            |
| height         | Height of the cone.                                                                                                      | number  | -      | 1            |
| radialSegments | Number of segmented faces around the circumference of the cone.<br/>Minimum value is `3`.                                | number  | -      | 32           |
| heightSegments | Number of rows of faces along the height of the cone.<br/>Minimum value is `3`.                                          | number  | -      | 1            |
| openEnded      | A Boolean indicating whether the base of the cone is open or capped.<br/>Default is `false`, meaning capped.             | boolean | -      | false        |
| thetaStart     | Start angle for first segment.                                                                                           | number  | -      | 0            |
| thetaLength    | The central angle, often called theta, of the circular sector.<br/>The default is `2π`, which makes for a complete cone. | number  | -      | 2 \* Math.PI |

---

BEGIN_DOCS

  <script setup>
  import ConeGeometry from '../../examples/ConeGeometry.vue'
  </script>

`ConeGeometry` is a simple component for creating a cone with given `radius` and `height`.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <ConeGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[6, 6, 3]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="[Math.PI / 2, 0, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <ConeGeometry name="geo" :radius="4" :height="5" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, ConeGeometry, MeshNormalMaterial } from "@janvorisek/drie";
</script>
```

:::
