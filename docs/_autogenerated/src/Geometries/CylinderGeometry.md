# CylinderGeometry

## Props

| Prop name      | Description                                                                                                                  | Type    | Values | Default      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------ |
| name           | Name of the geometry.                                                                                                        | string  | -      | ""           |
| radiusTop      | Radius of the cylinder at the top.                                                                                           | number  | -      | 1            |
| radiusBottom   | Radius of the cylinder at the bottom.                                                                                        | number  | -      | 1            |
| height         | Height of the cylinder.                                                                                                      | number  | -      | 1            |
| radialSegments | Number of segmented faces around the circumference of the cylinder.<br/>Minimum value is `3`.                                | number  | -      | 32           |
| heightSegments | Number of rows of faces along the height of the cylinder.<br/>Minimum value is `1`.                                          | number  | -      | 1            |
| openEnded      | A Boolean indicating whether the base of the cylinder is open or capped.<br/>Default is `false`, meaning capped.             | boolean | -      | false        |
| thetaStart     | Start angle for first segment.                                                                                               | number  | -      | 0            |
| thetaLength    | The central angle, often called theta, of the circular sector.<br/>The default is `2π`, which makes for a complete cylinder. | number  | -      | 2 \* Math.PI |

---

BEGIN_DOCS

  <script setup>
  import CylinderGeometry from '../../examples/CylinderGeometry.vue'
  </script>

`CylinderGeometry` is a simple component for creating a cylinder with given `topRadius`, `bottomRadius` and `height`.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <CylinderGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[4, 4, 7]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="[Math.PI / 2, 0, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <CylinderGeometry name="geo" :radius-top="2" :radius-bottom="2" :height="5" :radial-segments="12" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, CylinderGeometry, MeshNormalMaterial } from "@janvorisek/drie";
</script>
```

:::
