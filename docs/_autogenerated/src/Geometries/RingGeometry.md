# RingGeometry

## Props

| Prop name     | Description                                                                                                                | Type   | Values | Default      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------------ |
| name          | Name of the geometry.                                                                                                      | string | -      | ""           |
| innerRadius   | Inner radius of the ring.<br/>Must be smaller than `outerRadius`.                                                          | number | -      | 0.5          |
| outerRadius   | Outer radius of the ring.<br/>Must be greater than `innerRadius`.                                                          | number | -      | 1            |
| thetaSegments | Number of radial segments.<br/>A higher number means the ring will be more round<br/>Minimum value is `3`.                 | number | -      | 32           |
| phiSegments   | Number of segments over the ring thickness.                                                                                | number | -      | 1            |
| thetaStart    | Start angle for first segment.                                                                                             | number | -      | 0            |
| thetaLength   | The central angle, often called theta, of the circular sector.<br/>The default is `2π`, which makes for a complete circle. | number | -      | 2 \* Math.PI |

---

BEGIN_DOCS

  <script setup>
  import RingGeometry from '../../examples/RingGeometry.vue'
  </script>

`RingGeometry` is a simple component for a two-dimensional ring geometry.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <RingGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[3, 3, 3]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshNormalMaterial :side="DoubleSide" />
          <RingGeometry />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, RingGeometry, MeshNormalMaterial } from "@janvorisek/drie";
</script>
```

:::
