<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
The GridHelper is an object to define grids. Grids are two-dimensional arrays of lines.

## Example

### Code

```vue-html
<GridHelper :size="10" :division="10" />
```
</docs>

<script setup lang="ts">
import { provide, inject } from "vue";

import { GridHelper, Scene } from "three";
import { handleVectorProp, manageParentRelationship } from "../utils";
import { Vector3Like } from "../types";

export interface Props {
  /**
   * The color of the centerline.
   * This can be a Color, a hexadecimal value and an CSS-Color name.
   */
  colorCenterLine?: number | string;

  /**
   * The color of the lines of the grid.
   * This can be a Color, a hexadecimal value and an CSS-Color name.
   */
  colorGrid?: number | string;

  /**
   * The number of divisions across the grid.
   */
  divisions?: number;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * The size of the grid.
   */
  size?: number;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  colorCenterLine: 0x444444,
  colorGrid: 0x888888,
  divisions: 10,
  size: 1,
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const three = new GridHelper(props.size, props.divisions, props.colorCenterLine, props.colorGrid);

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

provide("mesh", three);

defineExpose({ three });
</script>
