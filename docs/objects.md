# Objects

Objects typically require a geometry and a material.

## Usage

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

## Available Object3Ds

The following objects are supported:

- [Group](components/Objects/Group)
- [Line](components/Objects/Line)
- [LineLoop](components/Objects/LineLoop)
- [LineSegments](components/Objects/LineSegments)
- [Mesh](components/Objects/Mesh)
- [Points](components/Objects/Points)

You can use any of the loaders and treat them as `<Mesh>`

- [GLTFLoader](components/Loaders/GLTFLoader)
- [OBJLoader](components/Loaders/OBJLoader)

## Position, rotation, scale

### Constant value

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

### Dynamic value

You can bind position, rotation and scale to a [Vector3Like](/types#vector3like) variable.

```vue-html
<Mesh
  :position="pos"
  :rotation="rot"
  :scale="sca"
>
  <MeshBasicMaterial color="red" />
  <BoxGeometry />
</Mesh>
```

In order to use reactivity, specify the variables using Vue3 `ref()` in the setup function. 

```vue
<script setup lang="ts">
  // Specify position, rotation and scale as reactive arrays
  const pos = ref<[number, number, number]>([0, 0, 0]);
  const rot = ref<[number, number, number]>([0, 0, 0]);
  const sca = ref<[number, number, number]>([1, 1, 1]);

  // A custom function to calculate the transformations
  const calculateTransformations = () => {
    const angle = Date.now() / 1000;

    // Changing ref values triggers update of the mesh position, rotation and scale 
    pos.value = [Math.cos(angle), Math.sin(angle), Math.sin(angle)];
    rot.value = [Math.cos(angle) * Math.PI, 0, 0];
    sca.value = [1 + Math.cos(angle), 1 + Math.cos(angle), 1 + Math.cos(angle)];
  };

  // This can be called in renderer's onBeforeRender, etc.
  calculateTransformations();
</script>
```