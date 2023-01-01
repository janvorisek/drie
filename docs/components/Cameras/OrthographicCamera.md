# OrthographicCamera

  <script setup>
  import OrthographicCamera from '../../examples/OrthographicCamera.vue'
  </script>

This component manages [`THREE.OrthographicCamera`](https://threejs.org/docs/#api/en/cameras/OrthographicCamera).

## Example

  <ClientOnly>
  <OrthographicCamera />
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

