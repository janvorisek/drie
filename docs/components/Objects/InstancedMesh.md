# InstancedMesh
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


## Props

| Prop name     | Description                                                             | Type    | Default |
| ------------- | ----------------------------------------------------------------------- | ------- | ------- |
|` castShadow    `| Whether the object gets rendered into shadow map.                       | boolean | false   |
|` count         `| The number of instances.                                                | number  |         |
|` geometry      `| Optional name of the geometry.<br/>This allows reusing of the geometry. | union   | null    |
|` material      `| Optional name of the material.<br/>This allows reusing of the material. | union   | null    |
|` receiveShadow `| Whether the material receives shadows.                                  | boolean | false   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

