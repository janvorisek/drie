# SphereGeometry

  <script setup>
  import SphereGeometry from '../../examples/SphereGeometry.vue'
  </script>

This component manages [`THREE.SphereGeometry`](https://threejs.org/docs/#api/en/geometries/SphereGeometry).

## Example

  <ClientOnly>
  <SphereGeometry />
  </ClientOnly>


## Props

| Prop name      | Description          | Type   | Default      |
| -------------- | -------------------- | ------ | ------------ |
|` name           `| Name of the geometry | string | ""           |
|` radius         `|                      | number | 1            |
|` widthSegments  `|                      | number | 8            |
|` heightSegments `|                      | number | 6            |
|` phiStart       `|                      | number | 0            |
|` phiLength      `|                      | number | 2 \* Math.PI |
|` thetaStart     `|                      | number | 0            |
|` thetaLength    `|                      | number | Math.PI      |

---

