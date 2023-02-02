# Raycasting

Raycasting can be performed on [`<Group>`](/components/Objects/Group) out of the box.

## Enable raycasting

You need to set the `enableRaycasting` property to true.

```vue-html
<Group :enableRaycasting="true">
  <Mesh />
  <Mesh />
  <Mesh />
</Group>
```

This way, raycasting is performed only on the [`Group`](/components/Objects/Group) children and not whole [`Scene`](/components/Scene). When raycasting is disabled, the mouse event listeners are disabled and there is no performance drop.

## Events

We use [`THREE.Raycaster`](https://threejs.org/docs/#api/en/core/Raycaster) in combination with mouse event listeners. You need to supply your callbacks using props.

List of supported events can be seen below:

```vue-html
<Group
  :enableRaycasting="true"
  :onClick="onClick"
  :onMouseMove="onMouseMove"
  :onMouseEnter="onMouseEnter"
  :onMouseLeave="onMouseLeave"
>
  <Mesh />
  <Mesh />
  <Mesh />
</Group>
```

And implement the corresponding methods in the setup function

```ts
/**
 * is contains clicked objects
 */
const onClick = (is: Intersection[]) => {
  console.log(is); // Do whatever you need to with is
}

/**
 * is contains mouse-overed objects
 */
const onMouseMove = (is: Intersection[]) => {
  console.log(is); // Do whatever you need to with is
}

/**
 * is contains objects entered by the mouse
 */
const onMouseEnter = (is: Intersection[]) => {
  console.log(is); // Do whatever you need to with is
}

/**
 * is contains objects left by the mouse
 */
const onMouseLeave = (is: Intersection[]) => {
  console.log(is); // Do whatever you need to with is
}

```

Note that the `is` array may contain multiple intersections.
It's up to you to filter the results according to your needs.
Typically the closest object is of our interest.

## `Intersection` interface

The `Intersection` is defined in the three.js library.

```ts
export interface Intersection<TIntersected extends Object3D = Object3D> {
    distance: number;
    distanceToRay?: number | undefined;
    point: Vector3;
    index?: number | undefined;
    face?: Face | null | undefined;
    faceIndex?: number | undefined;
    object: TIntersected;
    uv?: Vector2 | undefined;
    uv2?: Vector2 | undefined;
    instanceId?: number | undefined;
}
```

## Example

The classical example is to mark hovered objects by changing its material colors.
This can be done by listening to the `onMouseEnter` and `onMouseLeave` events.

In our example each of the meshes is a simple triangle with its unique material. Therefore the material color can be manipulated directly.

<script setup lang="ts">
// Basic example just imports the used Drie components
import { Renderer, Scene } from "../../src"; // always needed
import { Group, Mesh, BufferGeometry, MeshBasicMaterial } from "../../src"; // mesh
import { PerspectiveCamera, OrbitControls } from "../../src"; // camera

// Drie component names conflict with three.js objects
// We prepend T to the three class names for correct typings inside of the events
import {
  Mesh as TMesh,
  MeshBasicMaterial as TMeshBasicMaterial,
  BufferGeometry as TBufferGeometry,
  Color // no conflict here
} from "three";

const onMouseEnter = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
  // we expect is to contain at least 1 element
  // the first element should be the closest one to the mouse from camera
  is[0].object.material.color = new Color("red");
  console.log("enter");
};

const onMouseLeave = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
  // we expect is to contain at least 1 element
  // the first element should be the closest one to the mouse from camera
  is[0].object.material.color = new Color("#aaa");
  console.log("leave");
};
</script>

<ClientOnly>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 1, 2]" :up="[0, 0, 1]">
        <OrbitControls :target="[5, 0, 0]" />
      </PerspectiveCamera>
      <Scene background="white">
        <Group
          enable-raycasting
          :onMouseEnter="onMouseEnter"
          :onMouseLeave="onMouseLeave"
        >
          <Mesh v-for="i in 5" :key="i" :position="[i * 1.5, 0, 0]">
            <MeshBasicMaterial color="#aaa" />
            <BufferGeometry
              :vertices="[0, 0, 0, 1, 0, 0, 1, 1, 0]"
              :faces="[0, 1, 2]"
            />
          </Mesh>
        </Group>
      </Scene>
    </Renderer>
  </div>
</ClientOnly>

```vue{9-11,40-45,47-52}
<template>
  <div style="width: 640px; height: 480px;">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 1, 2]" :up="[0, 0, 1]">
        <OrbitControls :target="[5, 0, 0]" />
      </PerspectiveCamera>
      <Scene background="white">
        <Group
          enableRaycasting
          :onMouseEnter="onMouseEnter"
          :onMouseLeave="onMouseLeave"
        >
          <Mesh v-for="i in 5" :key="i" :position="[i * 1.5, 0, 0]">
            <MeshBasicMaterial color="#aaa" />
            <BufferGeometry
              :vertices="[0, 0, 0, 1, 0, 0, 1, 1, 0]"
              :faces="[0, 1, 2]"
            />
          </Mesh>
        </Group>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer, Scene } from "../src"; // always needed
import { Group, Mesh, BufferGeometry, MeshBasicMaterial } from "../src"; // mesh
import { PerspectiveCamera, OrbitControls } from "../src"; // camera

// Drie component names conflict with three.js objects
// We prepend T to the three class names for correct typings inside of the events
import {
  Mesh as TMesh,
  MeshBasicMaterial as TMeshBasicMaterial,
  BufferGeometry as TBufferGeometry,
  Color // no conflict here
} from "three";

const onMouseEnter = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
  // we expect is to contain at least 1 element
  // the first element should be the closest one to the mouse from camera
  is[0].object.material.color = new Color("red");
  console.log("enter");
};

const onMouseLeave = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
  // we expect is to contain at least 1 element
  // the first element should be the closest one to the mouse from camera
  is[0].object.material.color = new Color("#aaa");
  console.log("leave");
};
</script>
```