# LineDashedMaterial

  <script setup>
  import LineDashedMaterial from '../../examples/LineDashedMaterial.vue'
  </script>

A material for drawing wireframe-style geometries.

## Example

  <ClientOnly>
  <LineDashedMaterial />
  </ClientOnly>


## Props

| Prop name | Description                                                 | Type   | Default  |
| --------- | ----------------------------------------------------------- | ------ | -------- |
|` color     `| Color of the material.                                      | union  | 0xffffff |
|` scale     `| The scale of the dashed part of a line.                     | number | 1        |
|` dashSize  `| The size of the dash. This is both the gap with the stroke. | number | 3        |
|` gapSize   `| The size of the gap.                                        | number | 1        |

---

