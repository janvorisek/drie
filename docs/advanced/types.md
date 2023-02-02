# Types

Drie, being written in TypeScript and Vue 3, provides first class support for prop type validation.

## Vector3Like

THREE.js uses its `Vector3` class to represent positions, rotations, scale, etc.
In order to keep using Drie user friendly, component properties accept vectors in multiple formats described by our `Vector3Like` type.

### Array

Using array is straightforward and preffered.

```vue
<Mesh :position="[3, 5, 7]"></Mesh>
```

### Any object with x, y, z properties

```vue
<Mesh :position="{ x: 3, y: 5, z: 7 }"></Mesh>
```

### Vector3

Using `Vector3` from THREE.js is possible, but you need to import the Vector3 in order to use it inside of a template.

::: danger Reactivity
Using Vector3 for reactive properties is not supported and will result into no updates! 
:::

```vue{6,12}
<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie"; // always needed
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@janvorisek/drie"; // mesh
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"; // camera

import { Vector3 } from 'three'; // Import Vector3 in order to use it inside template
</script>

<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :up="new Vector3(0, 0, 1)">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>
```
