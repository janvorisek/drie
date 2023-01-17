# CircleGeometry

  <script setup>
  import CircleGeometry from '../../examples/CircleGeometry.vue'
  </script>

`CircleGeometry` is a simple component for a circle with given `radius`. It is constructed from a number of triangular `segments`. It is built counter-clockwise from a start angle and a given central angle.

It can also be used to create regular polygons, where the number of segments determines the number of sides.

Any modifications to the `radius`, `segments`, `thetaStart` and `thetaLength` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <CircleGeometry />
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
        <Mesh>
          <MeshNormalMaterial :side="DoubleSide" />
          <CircleGeometry :radius="4" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, CircleGeometry, MeshNormalMaterial } from "@janvorisek/drie";
</script>
```

:::


## Props

| Prop name   | Description                                                                                                                | Type   | Default      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
|` name        `| Name of the geometry.                                                                                                      | string | ""           |
|` radius      `| Radius of the circle.                                                                                                      | number | 1            |
|` segments    `| Number of segments (triangles).<br/>Minimum value is `3`.                                                                  | number | 32           |
|` thetaStart  `| Start angle for first segment.                                                                                             | number | 0            |
|` thetaLength `| The central angle, often called theta, of the circular sector.<br/>The default is `2π`, which makes for a complete circle. | number | 2 \* Math.PI |

---

