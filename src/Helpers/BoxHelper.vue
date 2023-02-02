<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS

Helper object to graphically show the world-axis-aligned bounding box around an object.

Ulike the three.js helper, this component crates a box mesh around the target mesh.

If you are interested in showing line segments around, you can use transparent BoxHelper in combination with LineSegments and EdgesGeometry.

</docs>

<script setup lang="ts">
import { provide, inject, onUnmounted, onMounted, nextTick } from "vue";

import { Box3, BoxGeometry, BufferGeometry, Material, Mesh, MeshBasicMaterial, Object3D, Scene, Vector3 } from "three";
import { Vector3Like } from "../types";
import { handleVectorProp, disposeTHREEObject, handlePropCallback, manageParentRelationship, copyGeo } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

  /**
   * Optional name of the material.
   * This allows reusing of the material.
   */
  material?: string | null;

  /**
   * Name of the target mesh.
   */
  mesh: string;

  /**
   * Name of the box Mesh.
   */
  name?: string;

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
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  mesh: "",
  name: "",
  castShadow: false,
  receiveShadow: false,
  material: null,
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new MeshBasicMaterial();

const three = new Mesh(geometry, material);

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function applyProps() {
  three.castShadow = props.castShadow;
  three.receiveShadow = props.receiveShadow;
  three.name = props.name;
}

applyProps();

handlePropCallback(props, "castShadow", applyProps);
handlePropCallback(props, "receiveShadow", applyProps);

const getMaterial = inject("getMaterial") as (g: string) => Material;

function redoGeometry(obj: Object3D) {
  const bbox = new Box3();
  bbox.setFromObject(obj);
  const center = new Vector3();
  bbox.getCenter(center);

  const tmp = new BoxGeometry(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
  copyGeo(three.geometry, tmp);

  // For raycasting
  three.geometry.computeBoundingSphere();

  three.position.set(center.x, center.y, center.z);

  EventBus.geometryChanged(three.geometry.name, three.geometry);
}

// Recursively compute bounding box
// This is important for Groups, i.e. GLTFLoader, OBJLoader etc.
const computeBB = (o: Object3D) => {
  if ("geometry" in o) (o.geometry as BufferGeometry).computeBoundingBox();
  else {
    for (const c of o.children) {
      computeBB(c);
    }
  }
};

EventBus.object3DChanged.on(props.mesh, (obj) => {
  computeBB(obj);
  nextTick(() => {
    redoGeometry(obj);
  });
});

EventBus.object3DTranslated.on(props.mesh, (obj) => {
  computeBB(obj);
  nextTick(() => {
    redoGeometry(obj);
  });
});

onMounted(() => {
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
