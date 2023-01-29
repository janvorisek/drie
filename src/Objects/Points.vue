<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
A component for displaying points.

It accepts any geometry and [`<PointsMaterial>`](/components/Materials/PointsMaterial) as a material.

## Example

### Code

```vue-html
<Points>
  <PointsMaterial color="blue" />
  <SphereGeometry />
</Points>
```
</docs>

<script setup lang="ts">
import { provide, inject, onUnmounted, onMounted } from "vue";

import { BufferGeometry, Points, PointsMaterial, Scene } from "three";
import { Vector3Like } from "../types";
import { disposeTHREEObject, handlePropCallback, handleVectorProp, manageParentRelationship } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Name of the Points mesh.
   */
  name?: string;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new PointsMaterial({ color: "red", sizeAttenuation: false, size: 2 });

const three = new Points(geometry, material);

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

handlePropCallback(props, "position", () => {
  EventBus.object3DTranslated(props.name, three);
});
handlePropCallback(props, "rotation", () => {
  EventBus.object3DTranslated(props.name, three);
});
handlePropCallback(props, "scale", () => {
  EventBus.object3DTranslated(props.name, three);
});

function applyProps() {
  three.name = props.name;
}

applyProps();

onMounted(() => {
  EventBus.object3DChanged(props.name, three);
});

onUnmounted(() => {
  scene.remove(three);

  disposeTHREEObject(three);
});

provide("mesh", three);

defineExpose({ three });
</script>
