# Mesh

  <script setup>
  import Mesh from '../../examples/Mesh.vue'
  </script>

A component representing triangular mesh. Each triangle in the mesh is defined by three vertices, which are connected by edges to form the surface of the object.

Mesh is composed of a [geometry](/geometries), which defines the shape of the object, and a [material](/materials), which defines the appearance of the object.

## Example

  <ClientOnly>
    <Mesh />
  </ClientOnly>

### Code

```vue-html
<Mesh>
  <!-- Use any supported mesh material -->
  <MeshBasicMaterial color="red" />
  <!-- Use any supported geometry -->
  <BoxGeometry />
</Mesh>
```


## Props

| Prop name     | Description                                                                                     | Type        | Default            |
| ------------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` castShadow    `| Whether the object gets rendered into shadow map.                                               | boolean     | false              |
|` geometry      `| Optional name of the geometry.<br/>This allows reusing of the geometry.                         | union       | null               |
|` material      `| Optional name of the material.<br/>This allows reusing of the material.                         | union       | null               |
|` position      `| A [Vector3Like](/types#vector3like) representing the object's local position.                   | Vector3Like | [0, 0, 0] |
|` receiveShadow `| Whether the material receives shadows.                                                          | boolean     | false              |
|` rotation      `| A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians. | Vector3Like | [0, 0, 0] |
|` scale         `| A [Vector3Like](/types#vector3like) representing the object's local scale.                      | Vector3Like | [1, 1, 1] |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

