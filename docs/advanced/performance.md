# Performance

This page focuses on performance improvements while using Drie. The tips may be relevant in pure three.js or another frameworks.

## Reusing geometries

Performance may start deteriorating when creating thousands or even just hundreds of meshes.

With Drie, you can reuse geometry in a simple way. Specify the geometries directly in the renderer and select a unique name for each of them.

```vue-html{2}
<Renderer>
  <BufferGeometry name="reuseGeo" :vertices="[0, 0, 0, 1, 0, 0, 1, 1, 0]" :faces="[0, 1, 2]" />
  <ParametricGeometry name="someGeometry" />
  <BoxGeometry name="cubeGeometry" />
</Renderer>
```

Then use the geometry in as many meshes as you need. For example in a loop:

```vue-html{4}
<Mesh
  v-for="i in count"
  :key="i"
  geometry="reuseGeo"
  :position="[i * 1.5, 0, 0]"
>
  <MeshBasicMaterial color="blue" />
</Mesh>
```

## Reusing materials

Materials can be reused in a same way as geometries.

Specify the materials directly in the renderer and select a unique name for each of them.

```vue-html{2}
<Renderer>
  <MeshBasicMaterial name="reuseMat" color="#aaa" />
  <LineBasicMaterial name="someLineMat" color="#ffff00" />
  <MeshLambertMaterial name="anotherMat" color="#770000" />
</Renderer>
```

Then use the material in as many meshes as you need. For example in a loop:

```vue-html{5}
<Mesh
  v-for="i in count"
  :key="i"
  geometry="reuseGeo"
  material="reuseMat"
  :position="[i * 1.5, 0, 0]"
/>
```

## Instanced mesh

Use [`<InstancedMesh>`](/components/Objects/InstancedMesh) if you have to render a large number of objects with the same geometry and material but with different world transformations.

Number of instances must be specified using the `count` property.

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

```ts{7,10,13}
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

## Animations

To manipulate object position, rotation, scale or material properties efficiently, submit a callback to the Renderer's `onBeforeRender` property.

```vue-html
<Renderer :on-before-render="onBeforeRender">...</Renderer>
```

To calculate animation, the current timestamp may be used.

```ts
const onBeforeRender = () => {
  const angle = Date.now() / 1000;

  radius.value = Math.cos(angle) + 2;
  scale.value = Math.sin(angle * 5) * 0.5 + 1;

  pos.value = [Math.cos(angle), Math.sin(angle), Math.sin(angle)];
  rot.value = [Math.cos(angle) * Math.PI, 0, 0];
};
```

::: warning
Avoid using `window.setInterval` to manipulate anything. The `onBeforeRender` callback uses `requestAnimationFrame` and thus prevents excess draw calls (e.g, when tab is not in focus).
:::
