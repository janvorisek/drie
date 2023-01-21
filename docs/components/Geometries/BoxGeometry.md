# BoxGeometry

  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  import { computed, ref } from 'vue';
  const demo = ref('');
  
  const liveCode = computed(() => {
    return `<BoxGeometry
  :width="${Math.round(demo.value.width*100)/100}"
  :height="${Math.round(demo.value.height*100)/100}"
  :depth="${Math.round(demo.value.depth*100)/100}"
  :widthSegments="${demo.value.widthSegments}"
  :heightSegments="${demo.value.heightSegments}"
  :depthSegments="${demo.value.depthSegments}"
/>`
    });
  </script>

BoxGeometry is a component for a rectangular cuboid with a given `width`, `height`, and `depth`. The cuboid is centred on the origin, with each edge parallel to one of the axes.

Any modifications to the `width`, `height`, `depth`, `widthSegments`, `heightSegments` and `depthSegments` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
  <BoxGeometry ref="demo" />
  </ClientOnly>

### Code

Note: _The following code is updated according to the properties set above._

  <ClientOnly>
  <LiveCodeBlock lang="vue-html" :code="liveCode" />
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

