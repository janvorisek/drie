# LineBasicMaterial

  <script setup>
  import LineBasicMaterial from '../../examples/LineBasicMaterial.vue'
  </script>

A material for drawing line geometries.

Suitable for [`<Line />`](/components/Objects/Line), [`<LineSegments />`](/components/Objects/LineSegments) or [`<LineLoop />`](/components/Objects/LineLoop).

## Example

  <ClientOnly>
  <LineBasicMaterial />
  </ClientOnly>


## Props

| Prop name   | Description                                                                   | Type    | Default  |
| ----------- | ----------------------------------------------------------------------------- | ------- | -------- |
|` color       `| Color of the material.                                                        | union   | 0xffffff |
|` name        `| Name of the material                                                          | string  | ""       |
|` opacity     `| Float in the range of `0.0 - 1.0` indicating how transparent the material is. | number  | 1        |
|` transparent `| Defines whether this material is transparent.                                 | boolean | false    |

---

