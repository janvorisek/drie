<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { Group, Intersection, Vector2 } from "three";
import { provide } from "vue";
import { manageParentRelationship, handleGroupRaycasting } from "../utils";

const three = new Group();

manageParentRelationship(three);

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

handleGroupRaycasting(three, emit);

provide("parent", three);

defineExpose({ three });
</script>
