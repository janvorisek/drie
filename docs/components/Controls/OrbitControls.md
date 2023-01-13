# OrbitControls

  <script setup>
  import OrbitControls from '../../examples/OrbitControls.vue'
  </script>

This component manages [`THREE.OrbitControls`](https://threejs.org/docs/#examples/en/controls/OrbitControls).

`<OrbitControls>` must be passed to [`<PerspectiveCamera>`](/components/Cameras/PerspectiveCamera) or [`<OrthographicCamera>`](/components/Cameras/OrthographicCamera)

## Example

  <ClientOnly>
  <OrbitControls />
  </ClientOnly>

::: details Click me to view the example code

```vue{5}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <OBJLoader
          :position="[0, 0, -0.6]"
          :rotation="[Math.PI / 2, Math.PI, 0]"
          :scale="[20, 20, 20]"
          url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
        >
          <MeshNormalMaterial />
        </OBJLoader>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";
import { OBJLoader, MeshNormalMaterial } from "@janvorisek/drie";
import { AxesHelper } from "@janvorisek/drie";
</script>
```

:::


## Props

| Prop name       | Description                                                                                                                                                                                                                                                                               | Type        | Default            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` enablePan       `| Enable or disable camera panning.                                                                                                                                                                                                                                                         | boolean     | true               |
|` enableRotate    `| Enable or disable horizontal and vertical rotation of the camera.<br/>Note that it is possible to disable a single axis by setting the min and max of the polar angle or azimuth angle to the same value, which will cause the vertical or horizontal rotation to be fixed at that value. | boolean     | true               |
|` enableZoom      `| Enable or disable zooming (dollying) of the camera.                                                                                                                                                                                                                                       | boolean     | true               |
|` minZoom         `| How far you can zoom in.<br/>`OrthographicCamera` only.                                                                                                                                                                                                                                   | number      | 0                  |
|` maxZoom         `| How far you can zoom out.<br/>`OrthographicCamera` only.                                                                                                                                                                                                                                  | number      | Infinity           |
|` minDistance     `| How far you can dolly in.<br/>`PerspectiveCamera` only.                                                                                                                                                                                                                                   | number      | 0                  |
|` maxDistance     `| How far you can dolly out.<br/>`PerspectiveCamera` only.                                                                                                                                                                                                                                  | number      | Infinity           |
|` minPolarAngle   `| How far you can orbit vertically, lower limit.<br/>Range is 0 to Math.PI radians                                                                                                                                                                                                          | number      | 0                  |
|` maxPolarAngle   `| How far you can orbit vertically, upper limit.<br/>Range is 0 to Math.PI radians                                                                                                                                                                                                          | number      | Math.PI            |
|` minAzimuthAngle `| How far you can orbit horizontally, lower limit.<br/>If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min &lt; 2π).                                                                                                                                       | number      | Infinity           |
|` maxAzimuthAngle `| How far you can orbit horizontally, upper limit.<br/>If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min &lt; 2π).                                                                                                                                       | number      | Infinity           |
|` target          `| The focus point of the controls.                                                                                                                                                                                                                                                          | Vector3Like | [0, 0, 0] |

---

