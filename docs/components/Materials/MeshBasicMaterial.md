# MeshBasicMaterial

  <script setup>
  import MeshBasicMaterial from '../../examples/MeshBasicMaterial.vue'
  </script>

A material for drawing geometries in a simple shaded (flat or wireframe) way.

This material is not affected by lights.

## Example

  <ClientOnly>
  <MeshBasicMaterial />
  </ClientOnly>


## Props

| Prop name    | Description                                                                                       | Type    | Default   |
| ------------ | ------------------------------------------------------------------------------------------------- | ------- | --------- |
|` color        `| Color of the material.                                                                            | union   |           |
|` side         `| Defines which side of faces will be rendered - front, back or both. Represtented by `THREE.Side`. | Side    | FrontSide |
|` name         `| Name of the material                                                                              | string  | ""        |
|` opacity      `| Float in the range of `0.0 - 1.0` indicating how transparent the material is.                     | number  | 1         |
|` transparent  `| Defines whether this material is transparent.                                                     | boolean | false     |
|` vertexColors `| Defines whether vertex coloring is used.                                                          | boolean | false     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

