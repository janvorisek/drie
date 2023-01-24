<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  <script setup>
  import GLTFLoader from '../../examples/GLTFLoader.vue'
  </script>

  This component manages [`THREE.GLTFLoader`](https://threejs.org/docs/#examples/en/loaders/GLTFLoader).

  `<GLTFLoader>` behaves as a [`<Group>`](/components/Objects/Group) containing meshes loaded from the `.gltf` or `glb` file.

  ## Example

  <ClientOnly>
  <GLTFLoader />
  </ClientOnly>

  ```vue-html
  <GLTFLoader
    url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
    :position="[0, -3, 0]"
    :scale="[100, 100, 100]"
  />
  ```
</docs>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Vector3Like } from "../types";
import { handleVectorProp } from "../utils";

export interface Props {
  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

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

const loader = new GLTFLoader();

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
  loader.load(
    // resource URL
    props.url,
    // called when resource is loaded
    function (gltf) {
      handleVectorProp(props, "position", three, false);
      handleVectorProp(props, "rotation", three, false);
      handleVectorProp(props, "scale", three, false);

      three.add(gltf.scene);

      applyProps();

      emit("load", gltf.scene);
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

provide("mesh", three);

defineExpose({
  /**
   * Exposes `THREE.Group` entity containing Mesh[] loaded by the `GLTFLoader`
   */
  three,
});
</script>
