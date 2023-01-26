<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  <script setup>
  import OBJLoader from '../../examples/OBJLoader.vue'
  </script>

  This component allows you to load and display 3D models in the `.obj` file format.

  `<OBJLoader>` behaves as a [`<Group>`](/components/Objects/Group).

  ## Example

  <ClientOnly>
  <OBJLoader />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { provide, watch } from "vue";

import { Group, Intersection, Material, Mesh, Vector2 } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { Vector3Like } from "../types";
import { handleRaycasting, handleVectorProp, manageParentRelationship } from "../utils";

export interface Props {
  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

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
   * A [Vector3Like](/types#vector3like) representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * Whether the material receives shadows.
   */
  receiveShadow?: boolean;

  /**
   * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;

  /**
   * A string containing the path/URL of the `.obj` file.
   */
  url: string;
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
  castShadow: false,
  receiveShadow: false,
});

const emit = defineEmits<{
  /**
   * Emitted when OBJ file is successfuly loaded, parsed and added to the scene.
   * @arg {Group} group An instance of `THREE.Group`
   */
  (event: "load", group: Group): void;

  /**
   * Emmited on XHR progress
   */
  (event: "progress", xhr: ProgressEvent<EventTarget>): void;

  /**
   * Emitted on XHR error or OBJ parsing error
   */
  (event: "error", error: ErrorEvent): void;
}>();

const loader = new OBJLoader();

const three = new Group();

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function load() {
  // load a resource
  //return new Promise((resolve, reject) => {
  loader.load(
    // resource URL
    props.url,
    // called when resource is loaded
    function (object) {
      for (const o of object.children) {
        if ("material" in three) (o as Mesh).material = three.material as Material;
      }

      three.add(object);

      applyProps();

      emit("load", object);
      //resolve(object);
    },
    // called when loading is in progresses
    function (xhr) {
      emit("progress", xhr);
    },
    // called when loading has errors
    function (error) {
      emit("error", error);
    },
  );
  //});
}

function applyProps() {
  if (three.children.length === 0) return;
  for (const o of three.children[0].children) {
    o.castShadow = props.castShadow;
    o.receiveShadow = props.receiveShadow;
  }
}

applyProps();

watch(
  () => props.url,
  () => load(),
  {
    immediate: true,
  },
);

handleRaycasting(three.children, props);

provide("mesh", three);

defineExpose({
  /**
   * Exposes `THREE.Group` entity containing Mesh[] loaded by the `OBJLoader`
   */
  three,
});
</script>
