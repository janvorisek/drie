# BoxGeometry

  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  </script>

This component manages [`THREE.BoxGeometry`](https://threejs.org/docs/#api/en/geometries/BoxGeometry).

## Example

  <ClientOnly>
  <BoxGeometry />
  </ClientOnly>


## Props

| Prop name      | Description                          | Type   | Default |
| -------------- | ------------------------------------ | ------ | ------- |
|` name           `| Name of the geometry                 | string | ""      |
|` width          `| Width along the X axis               | number | 1       |
|` height         `| Height along the Y axis              | number | 1       |
|` depth          `| Depth along the Z axis               | number | 1       |
|` widthSegments  `| Number of segments along the X axis. | number | 1       |
|` heightSegments `| Number of segments along the Y axis. | number | 1       |
|` depthSegments  `| Number of segments along the Z axis. | number | 1       |

---

