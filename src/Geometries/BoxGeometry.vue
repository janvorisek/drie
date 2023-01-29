<script lang="ts">
export default {
  name: "BoxGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  import { computed, ref, onMounted } from 'vue';
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

  Note: *The following code is updated according to the properties set above.*

  <ClientOnly>
  <LiveCodeBlock lang="vue-html" :code="liveCode" />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";

import { BoxGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback, copyGeo } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Name of the geometry
   */
  name?: string;

  /**
   * Width along the X axis
   */
  width?: number;

  /**
   * Height along the Y axis
   */
  height?: number;

  /**
   * Depth along the Z axis
   */
  depth?: number;

  /**
   * Number of segments along the X axis.
   */
  widthSegments?: number;

  /**
   * Number of segments along the Y axis.
   */

  heightSegments?: number;
  /**
   * Number of segments along the Z axis.
   */
  depthSegments?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
});

function makeBox(
  width: number | undefined,
  height: number | undefined,
  depth: number | undefined,
  widthSegments: number | undefined,
  heightSegments: number | undefined,
  depthSegments: number | undefined,
) {
  return new BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.geometry = three;
}

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makeBox(
    props.width,
    props.height,
    props.depth,
    props.widthSegments,
    props.heightSegments,
    props.depthSegments,
  );

  copyGeo(three, tmp);

  EventBus.geometryChanged(props.name, three);
}

onMounted(redoGeometry);

handlePropCallback(props, "name", () => {
  three.name = props.name;
});

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "depth", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "depthSegments", redoGeometry);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <BoxGeometry ref="geometry" />
   * ```
   *
   * ```ts
   * const geometry = ref(null);
   *
   * onMounted(() => {
   * // Do something with the THREE.BufferGeometry instance
   * const threeGeometry = geometry.value.three;
   * })
   * ```
   */
  three,
});
</script>
