# Objects

Objects typically require a geometry and a material.

::: code-group
```vue-html [Mesh]
<Mesh>
  <MeshBasicMaterial color="red" />
  <BoxGeometry />
</Mesh>
```

```vue-html [Points]
<Points>
  <PointsMaterial color="blue" />
  <SphereGeometry />
</Points>
```

```vue-html [LineSegments]
<LineSegments>
  <LineBasicMaterial color="black" />
  <PlaneGeometry />
</LineSegments>
```
:::

The following objects are supported:

- [Group](components/Objects/Group)
- [LineSegments](components/Objects/LineSegments)
- [Mesh](components/Objects/Mesh)
- [Points](components/Objects/Points)


## Position, rotation, scale

Setting constant position, rotation and scale is simply done by passing an array.

```vue-html
<Mesh
  :position="[10, 5, 5]"
  :rotation="[Math.PI, 0, 0]"
  :scale="[10, 5, 3]"
>
  <MeshBasicMaterial color="red" />
  <BoxGeometry />
</Mesh>
```

In order to use reactivity, specify the variable using Vue3 `ref` or `reactive`. 

```vue
<template>
  <Mesh
    :position="pos"
    :rotation="rot"
    :scale="sca"
  >
    <MeshBasicMaterial color="red" />
    <BoxGeometry />
  </Mesh>
</template>

<script lang="ts">
  const pos = ref<[number, number, number]>([0, 0, 0]);
  const rot = ref<[number, number, number]>([0, 0, 0]);
  const sca = ref<[number, number, number]>([1, 1, 1]);

  // Dynamically translate, rotate and scale the mesh
  window.setInterval(() => {
    const angle = Date.now() / 1000;

    pos.value = [Math.cos(angle), Math.sin(angle), Math.sin(angle)];
    rot.value = [Math.cos(angle) * Math.PI, 0, 0];
    sca.value = [1 + Math.cos(angle), 1 + Math.cos(angle), 1 + Math.cos(angle)];
  }, 10);
</script>
```