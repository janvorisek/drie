<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch } from "vue";

import { BufferGeometry, Group, Mesh, MeshBasicMaterial, Scene } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { Vector3Like } from "../types";
import { handleVectorProp, vector3LikeToVector3 } from "../utils";

export interface Props {
  url: string;
  position?: Vector3Like;
  rotation?: Vector3Like;
  scale?: Vector3Like;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  castShadow: false,
  receiveShadow: false,
});

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
  loader.load(
    // resource URL
    props.url,
    // called when resource is loaded
    function (object) {
      for (const o of object.children) {
        three.children.push(o);
        //o.material
        (o as Mesh).material = three.material;

        handleVectorProp(props, "position", three, false);
        handleVectorProp(props, "rotation", three, false);
        handleVectorProp(props, "scale", three, false);
      }
    },
    // called when loading is in progresses
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("ERROR: OBJ file could not be loaded");
    },
  );
}

load();
watch(
  () => props.url,
  () => load(),
);

provide("mesh", three);

defineExpose({ three });
</script>
