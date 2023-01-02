<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  <script setup>
  import OBJLoader from '../../examples/OBJLoader.vue'
  </script>

  This component manages [`THREE.OBJLoader`](https://threejs.org/docs/?q=objloader#examples/en/loaders/OBJLoader).

  `<OBJLoader>` behaves as a [`<Group>`](/components/Objects/Group) containing meshes loaded from the `.obj` file.

  ## Example

  <ClientOnly>
  <OBJLoader />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { Group, Mesh, Scene } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { Vector3Like } from "../types";
import { handleVectorProp } from "../utils";

export interface Props {
  /**
   * A string containing the path/URL of the `.obj` file.
   */
  url: string;

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

  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

  /**
   * Whether the material receives shadows.
   */
  receiveShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
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

const scene = inject("scene") as Scene;

const three = new Group();
three.castShadow = true;
three.receiveShadow = true;
scene.add(three);

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
        three.children.push(o);
        (o as Mesh).material = three.material;

        handleVectorProp(props, "position", three, false);
        handleVectorProp(props, "rotation", three, false);
        handleVectorProp(props, "scale", three, false);
      }

      emit("load", object);
      resolve(object);
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

load();
watch(
  () => props.url,
  () => load(),
);

provide("mesh", three);

defineExpose({
  /**
   * Exposes `THREE.Group` entity containing Mesh[] loaded by the `OBJLoader`
   */
  three,
});
</script>
