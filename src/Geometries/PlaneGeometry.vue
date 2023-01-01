<script lang="ts">
export default {
  name: "PlaneGeometry",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { BufferGeometry, Mesh, PlaneGeometry } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Width along the X axis.
   */
  width?: number;

  /**
   * Height along the Y axis.
   */
  height?: number;

  /**
   * Number of segmented rectangular faces along the width of the sides.
   */
  widthSegments?: number;

  /**
   * Number of segmented rectangular faces along the height of the sides
   */
  heightSegments?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 1,
  height: 1,
  widthSegments: 1,
  heightSegments: 1,
});

const mesh = inject("mesh") as Mesh;

function makePlane(
  width: number | undefined,
  height: number | undefined,
  widthSegments: number | undefined,
  heightSegments: number | undefined,
) {
  return new PlaneGeometry(width, height, widthSegments, heightSegments);
}

const three = ref<BufferGeometry>(makePlane(props.width, props.height, props.widthSegments, props.heightSegments));
mesh.geometry = three.value;

function redoGeometry() {
  mesh.geometry.dispose();
  mesh.geometry = makePlane(props.width, props.height, props.widthSegments, props.heightSegments);
  three.value = mesh.geometry;
}

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);

defineExpose({ three });
</script>
