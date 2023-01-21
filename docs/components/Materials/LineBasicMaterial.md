# LineBasicMaterial

  <script setup>
  import LineBasicMaterial from '../../examples/LineBasicMaterial.vue'
  import { computed, ref } from 'vue';
  const demo = ref('');
  
  const liveCode = computed(() => {
    return `<LineBasicMaterial
  :color="${demo.value.color}"
  :transparent="${demo.value.transparent}"
  :opacity="${Math.round(demo.value.opacity*100)/100}"
/>`
    });

  </script>

A material for drawing line geometries.

Suitable for [`<Line />`](/components/Objects/Line), [`<LineSegments />`](/components/Objects/LineSegments) or [`<LineLoop />`](/components/Objects/LineLoop).

## Example

  <ClientOnly>
  <LineBasicMaterial ref="demo" />
  </ClientOnly>

### Code

Note: _The following code is updated according to the properties set above._

  <ClientOnly>
  <LiveCodeBlock lang="vue-html" :code="liveCode" />
  </ClientOnly>


## Props

| Prop name   | Description                                                                   | Type    | Default  |
| ----------- | ----------------------------------------------------------------------------- | ------- | -------- |
|` color       `| Color of the material.                                                        | union   | 0xffffff |
|` name        `| Name of the material                                                          | string  | ""       |
|` opacity     `| Float in the range of `0.0 - 1.0` indicating how transparent the material is. | number  | 1        |
|` transparent `| Defines whether this material is transparent.                                 | boolean | false    |

---

