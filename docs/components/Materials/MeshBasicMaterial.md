# MeshBasicMaterial

  <script setup>
  import MeshBasicMaterial from '../../examples/MeshBasicMaterial.vue'
  import { computed, ref } from 'vue';
  const demo = ref('');
  
  const liveCode = computed(() => {
    return `<MeshBasicMaterial
  :color="${demo.value.color}"
  :transparent="${demo.value.transparent}"
  :opacity="${Math.round(demo.value.opacity*100)/100}"
/>`
    });
  </script>

A material for drawing geometries in a simple shaded (flat or wireframe) way.

This material is not affected by lights.

## Example

  <ClientOnly>
  <MeshBasicMaterial ref="demo" />
  </ClientOnly>

### Code

Note: _The following code is updated according to the properties set above._

  <ClientOnly>
  <LiveCodeBlock lang="vue-html" :code="liveCode" />
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

