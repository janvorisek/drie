<script lang="ts">
export default {
  name: "BoxGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  </script>

  This component manages [`THREE.BoxGeometry`](https://threejs.org/docs/#api/en/geometries/BoxGeometry).

  ## Example

  <ClientOnly>
  <BoxGeometry />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { BoxGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
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
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
});

const mesh = inject("mesh") as Mesh;

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

const three = ref<BufferGeometry>(
  makeBox(props.width, props.height, props.depth, props.widthSegments, props.heightSegments, props.depthSegments),
);
mesh.geometry = three.value;

function redoGeometry() {
  mesh.geometry.dispose();
  mesh.geometry = makeBox(
    props.width,
    props.height,
    props.depth,
    props.widthSegments,
    props.heightSegments,
    props.depthSegments,
  );
  three.value = mesh.geometry;
}

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "depth", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "depthSegments", redoGeometry);

defineExpose({ three });
</script>
