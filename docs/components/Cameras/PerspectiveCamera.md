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

| Prop name  | Description                                                                                                                                                                                                                       | Type        | Default            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` aspect     `| Camera frustum aspect ratio, usually the canvas width / canvas height.                                                                                                                                                            | number      | 1                  |
|` autoResize `| Flag marking whether camera aspect ratio recalculates on renderer resize.                                                                                                                                                         | boolean     | true               |
|` far        `| Camera frustum far plane.<br/>Must be greater than the current value of near plane.                                                                                                                                               | number      | 2000               |
|` lookAt     `| Camera target                                                                                                                                                                                                                     | Vector3Like | [0, 0, 0] |
|` name       `| Camera name                                                                                                                                                                                                                       | string      | ""                 |
|` near       `| Camera frustum near plane.<br/>The valid range is greater than 0 and less than the current value of the far plane.<br/>Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera's near plane. | number      | 0.1                |
|` position   `| Camera position                                                                                                                                                                                                                   | Vector3Like | [0, 0, 0] |
|` up         `| Camera up vector                                                                                                                                                                                                                  | Vector3Like | [0, 1, 0] |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

