# PlaneGeometry

  <script setup>
  import PlaneGeometry from '../../examples/PlaneGeometry.vue'
  </script>

This component manages [`THREE.PlaneGeometry`](https://threejs.org/docs/#api/en/geometries/PlaneGeometry).

## Example

  <ClientOnly>
  <PlaneGeometry />
  </ClientOnly>


## Props

| Prop name      | Description                                                         | Type   | Default |
| -------------- | ------------------------------------------------------------------- | ------ | ------- |
|` name           `| Name of the geometry                                                | string | ""      |
|` width          `| Width along the X axis.                                             | number | 1       |
|` height         `| Height along the Y axis.                                            | number | 1       |
|` widthSegments  `| Number of segmented rectangular faces along the width of the sides. | number | 1       |
|` heightSegments `| Number of segmented rectangular faces along the height of the sides | number | 1       |

---

