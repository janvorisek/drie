# PerspectiveCamera

  <script setup>
  import PerspectiveCamera from '../../examples/PerspectiveCamera.vue'
  </script>

This component manages [`THREE.PerspectiveCamera`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera).

## Example

  <ClientOnly>
  <PerspectiveCamera />
  </ClientOnly>


## Props

| Prop name | Description      | Type        | Default            |
| --------- | ---------------- | ----------- | ------------------ |
|` name      `| Camera name      | string      | ""                 |
|` up        `| Camera up vector | Vector3Like | [0, 1, 0] |
|` position  `| Camera position  | Vector3Like | [0, 0, 0] |
|` lookAt    `| Camera target    | Vector3Like | [0, 0, 0] |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

