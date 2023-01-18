# PointsMaterial

  <script setup>
  import PointsMaterial from '../../examples/PointsMaterial.vue'
  </script>

A material for drawing [`<Points />`](/components/Objects/Points).

## Example

  <ClientOnly>
    <PointsMaterial />
  </ClientOnly>


## Props

| Prop name       | Description                                                                                     | Type    | Default  |
| --------------- | ----------------------------------------------------------------------------------------------- | ------- | -------- |
|` color           `| Color of the material.                                                                          | union   | 0xffffff |
|` sizeAttenuation `| Specify whether points' size is attenuated by the camera depth.<br/>_(Perspective camera only)_ | boolean | true     |
|` size            `| Defines the size of the points in pixels.                                                       | number  | 1        |
|` opacity         `| Float in the range of `0.0 - 1.0` indicating how transparent the material is.                   | number  | 1        |
|` transparent     `| Defines whether this material is transparent.                                                   | boolean | false    |

---

