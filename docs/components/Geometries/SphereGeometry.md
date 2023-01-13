# SphereGeometry

  <script setup>
  import SphereGeometry from '../../examples/SphereGeometry.vue'
  </script>

SphereGeometry is a component for a sphere with a given `radius`. Incomplete spheres can be created through the use of different values of `phiStart`, `phiLength`, `thetaStart` and `thetaLength`.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <SphereGeometry />
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
          <MeshLambertMaterial :color="0xeeaa55" />
          <SphereGeometry :radius="2" :width-segments="24" :height-segments="24" />
        </Mesh>
        <PointLight :position="rot" />
        <AmbientLight />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { Mesh, SphereGeometry, MeshLambertMaterial } from "@janvorisek/drie";
import { PointLight, AmbientLight } from "@janvorisek/drie";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [15 * Math.cos(angle), 15 * Math.sin(angle), 5];
}, 10);
</script>
```

:::


## Props

| Prop name      | Description                                              | Type   | Default      |
| -------------- | -------------------------------------------------------- | ------ | ------------ |
|` name           `| Name of the geometry.                                    | string | ""           |
|` radius         `| Sphere radius.                                           | number | 1            |
|` widthSegments  `| Number of horizontal segments.<br/>Minimum value is `3`. | number | 32           |
|` heightSegments `| Number of vertical segments.<br/>Minimum value is `2`    | number | 16           |
|` phiStart       `| Specify horizontal starting angle.                       | number | 0            |
|` phiLength      `| Specify horizontal sweep angle size.                     | number | 2 \* Math.PI |
|` thetaStart     `| Specify vertical starting angle                          | number | 0            |
|` thetaLength    `| Specify vertical sweep angle size                        | number | Math.PI      |

---

