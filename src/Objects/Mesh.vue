<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
  <script setup>
  import Mesh from '../../examples/Mesh.vue'
  </script>

  Component representing triangular polygon mesh based objects.

  ## Example

  <ClientOnly>
    <Mesh />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { provide, inject, onUnmounted, onMounted } from "vue";

import { BufferGeometry, Material, Mesh, MeshBasicMaterial, Scene } from "three";
import { Vector3Like } from "../types";
import { handleVectorProp, disposeTHREEObject, handlePropCallback, manageParentRelationship } from "../utils";

export interface Props {
  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

  geometry?: string | null;

  material?: string | null;

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
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  castShadow: false,
  receiveShadow: false,
  geometry: null,
  material: null,
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new MeshBasicMaterial();

const three = new Mesh(geometry, material);
three.castShadow = true;
three.receiveShadow = true;

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function applyProps() {
  three.castShadow = props.castShadow as boolean;
  three.receiveShadow = props.receiveShadow as boolean;
}

applyProps();

handlePropCallback(props, "castShadow", applyProps);
handlePropCallback(props, "receiveShadow", applyProps);

const getGeometry = inject("getGeometry") as (g: string) => BufferGeometry;
const getMaterial = inject("getMaterial") as (g: string) => Material;

onMounted(() => {
  if (props.geometry) {
    const geo = getGeometry(props.geometry);
    three.geometry = geo;
  }

  if (props.material) {
    const geo = getMaterial(props.material);
    // @ts-expect-error Force material from getMaterial to Mesh
    three.material = geo;
  }
});

onUnmounted(() => {
  scene.remove(three);
  disposeTHREEObject(three);
});

provide("mesh", three);

defineExpose({ three });
</script>
