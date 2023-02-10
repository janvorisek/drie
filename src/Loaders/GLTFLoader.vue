<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  <script setup>
  import GLTFLoader from '../../examples/GLTFLoader.vue'
  </script>

  This component asynchronously loads glTF file. Assets may be provided either in JSON (`.gltf`) or binary (`.glb`) format. External files store textures (`.jpg`, `.png`) and additional binary data (`.bin`).
  
  A glTF asset may deliver one or more scenes, including meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and/or cameras.
  
  `<GLTFLoader>` behaves as a [`<Group>`](/components/Objects/Group).

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
import { provide, watch } from "vue";

import { Group, Intersection, Vector2 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Vector3Like } from "../types";
import { handleRaycasting, handleVectorProp, manageParentRelationship } from "../utils";
import EventBus from "../EventBus";

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
   * Name of the Group.
   */
  name?: string;

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
   * Whether the material receives shadows.
   */
  receiveShadow?: boolean;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A [Vector3Like](/advanced/types#vector3like) representing the object's local scale.
   */
  scale?: Vector3Like;

  /**
   * A string containing the path/URL of the `.obj` file.
   */
  url: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
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

const loader = new GLTFLoader();

const three = new Group();
three.castShadow = true;
three.receiveShadow = true;

manageParentRelationship(three);

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
      EventBus.object3DChanged(props.name, three);
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
  three.name = props.name;
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
   * Exposes `THREE.Group` entity containing Mesh[] loaded by the `GLTFLoader`
   */
  three,
});
</script>
