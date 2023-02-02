<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  This component makes working with groups of objects easier.

  [Raycasting](/advanced/raycasting) may be enabled for group children. When enabled, [events](#events) are fired for corresponding mouse events.
</docs>

<script setup lang="ts">
import { Group, Intersection, Vector2 } from "three";
import { provide } from "vue";
import { Vector3Like } from "~/types";
import { manageParentRelationship, handleRaycasting, handleVectorProp } from "../utils";

export interface Props {
  /**
   * Component will emit mouse events when raycasting is enabled
   */
  enableRaycasting?: boolean;

  /**
   * Callback to be fired when Group content clicked.
   */
  onClick?: (is?: Intersection, mv?: Vector2) => void | null;

  /**
   * Callback to be fired when mouse-moving over Group content.
   */
  onMouseMove?: (is?: Intersection, mv?: Vector2) => void | null;

  /**
   * Callback to be fired when Group content entered by mouse.
   */
  onMouseEnter?: (is?: Intersection, mv?: Vector2) => void | null;

  /**
   * Callback to be fired when Group content left by mouse.
   */
  onMouseLeave?: (is?: Intersection, mv?: Vector2) => void | null;

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
  onClick: () => null,
  onMouseEnter: () => null,
  onMouseMove: () => null,
  onMouseLeave: () => null,
  enableRaycasting: false,
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
});

const three = new Group();

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

handleRaycasting(three.children, props);

provide("parent", three);

defineExpose({ three });
</script>
