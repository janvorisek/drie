<template>
  <slot></slot>
</template>

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

const emit = defineEmits<{
  /**
   * Emitted when Mesh is clicked.
   * @arg {Mesh} mesh An instance of `THREE.Mesh` being clicked.
   * @arg {Vector2} pointer A `THREE.Vector2` representing relative element coordinates on the canvas
   */
  (event: "click", mesh: Intersection[], pointer: Vector2): void;

  /**
   * Emitted when mouse is moved over Mesh.
   * @arg {Mesh} mesh An instance of `THREE.Mesh` being clicked.
   * @arg {Vector2} pointer A `THREE.Vector2` representing relative element coordinates on the canvas
   */
  (event: "mousemove", mesh: Intersection[], pointer: Vector2): void;

  /**
   * Emitted when mouse enters Mesh.
   * @arg {Mesh} mesh An instance of `THREE.Mesh` being clicked.
   * @arg {Vector2} pointer A `THREE.Vector2` representing relative element coordinates on the canvas
   */
  (event: "mouseenter", mesh: Intersection[], pointer: Vector2): void;

  /**
   * Emitted when mouse leaves Mesh.
   * @arg {Mesh} mesh An instance of `THREE.Mesh` being clicked.
   * @arg {Vector2} pointer A `THREE.Vector2` representing relative element coordinates on the canvas
   */
  (event: "mouseleave", mesh: Intersection[], pointer: Vector2): void;
}>();

handleRaycasting(three.children, props, emit);

provide("parent", three);

defineExpose({ three });
</script>
