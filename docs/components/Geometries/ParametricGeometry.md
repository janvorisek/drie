# ParametricGeometry

  <script setup>
  import ParametricGeometry from '../../examples/ParametricGeometry.vue'
  </script>

ParametricGeometry represents a parametric surface using a function that takes in a `u` and `v` value each between 0 and 1.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
    <ParametricGeometry />
  </ClientOnly>

::: details Click me to view the example code

```vue{10,25-32}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[10, 10, 10]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshNormalMaterial :side="DoubleSide" />
          <ParametricGeometry name="geo" :function="func" :slices="16" :stacks="16" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide, Vector3 } from "three";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, ParametricGeometry, MeshNormalMaterial } from "@janvorisek/drie";

// Parametric equation may be implemented in a following way
const func = (u: number, v: number, target: Vector3) => {
  u = u - 0.5;
  v = v - 0.5;
  const x = u * u + v * v;
  const y = u;
  const z = v;
  target.set(10 * x, 10 * y, 10 * z);
};
</script>
```

:::


## Props

| Prop name | Description                                                                                                                                                      | Type           | Default                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------- |
|` name      `| Name of the geometry.                                                                                                                                            | string         | ""                         |
|` function  `| A function that takes in a `u` and `v` value each between 0 and 1 and modifies a third Vector3 argument.<br/>Default is a function that generates a klein bottle | TSFunctionType | ParametricGeometries.klein |
|` slices    `| The count of slices to use for the parametric function.                                                                                                          | number         | 8                          |
|` stacks    `| The count of stacks to use for the parametric function.                                                                                                          | number         | 8                          |

---

