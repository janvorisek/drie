<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
A component drawing series of lines between vertices.

## Example

### Code

```vue-html
<Line>
  <!-- Any line material is supported -->
  <LineBasicMaterial color="black" />
  <PlaneGeometry />
</Line>
```
</docs>

<script setup lang="ts">
import { provide, inject, onUnmounted } from "vue";

import { BufferGeometry, LineBasicMaterial, Line, Scene } from "three";
import { Vector3Like } from "../types";
import { disposeTHREEObject, handleVectorProp, manageParentRelationship } from "../utils";

export interface Props {
  /**
   * A [Vector3Like](/advanced/types#vector3like) representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new LineBasicMaterial({ color: "black" });

const three = new Line(geometry, material);

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

onUnmounted(() => {
  scene.remove(three);

  disposeTHREEObject(three);
});

provide("mesh", three);

defineExpose({ three });
</script>
