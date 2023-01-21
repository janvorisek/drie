<template>
  <slot></slot>
</template>

<docs>BEGIN_DOCS
A special version of Mesh with instanced rendering support.

Use `<InstancedMesh>` if you have to render a large number of objects with the same geometry and material but with different world transformations.

The usage of `<InstancedMesh>` will help you to reduce the number of draw calls and thus improve the overall rendering [performance](/performance#instanced-mesh) in your application.

## Example

### Code

::: details Click me to view the example code

Specify instanced mesh with number of instances equal to `count` prop.

```vue-html
<InstancedMesh
  ref="instancedMesh"
  :count="10000"
>
  <BoxGeometry />
  <MeshBasicMaterial color="#770000" />
</InstancedMesh>
```

Then manipulate the matrix of individual instances:

```ts
const instancedMesh = ref("");

onMounted(() => {
  const dummy = new Object3D();
  for (let i = 0; i < 10000; i++) {
    // Set position
    dummy.position.copy(new Vector3(i * 2, i * 0.5, i * 0.05));

    // Set rotation
    dummy.position.copy(new Vector3(0, 0, 0));

    // Set scale
    dummy.scale.copy(new Vector3(1, 1, 1));

    // dummy.matrix will be used for i-th instance
    dummy.updateMatrix();

    // instancedMesh.value.three is THREE.InstancedMesh
    instancedMesh.value.three.setMatrixAt(i, dummy.matrix);
    instancedMesh.value.three.instanceMatrix.needsUpdate = true;
  }
});
```
:::
</docs>

<script setup lang="ts">
import { provide, inject, onUnmounted, onMounted } from "vue";

import { BufferGeometry, Material, InstancedMesh, MeshBasicMaterial, Scene } from "three";
import { disposeTHREEObject, handlePropCallback, manageParentRelationship } from "../utils";

export interface Props {
  /**
   * Whether the object gets rendered into shadow map.
   */
  castShadow?: boolean;

  /**
   * The number of instances.
   */
  count: number;

  /**
   * Optional name of the geometry.
   * This allows reusing of the geometry.
   */
  geometry?: string | null;

  /**
   * Optional name of the material.
   * This allows reusing of the material.
   */
  material?: string | null;

  /**
   * Whether the material receives shadows.
   */
  receiveShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  castShadow: false,
  receiveShadow: false,
  geometry: null,
  material: null,
});

const scene = inject("scene") as Scene;

const geometry = new BufferGeometry();
const material = new MeshBasicMaterial();

const three = new InstancedMesh(geometry, material, props.count);
three.castShadow = true;
three.receiveShadow = true;

manageParentRelationship(three);

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
