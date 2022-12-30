<script lang="ts">
export default {
  name: "BoxGeometry",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { BoxGeometry, BufferGeometry, Mesh } from "three";

export interface Props {
  /**
   * Width; that is, the length of the edges parallel to the X axis.
   */
  width?: number;
  /**
   * Height; that is, the length of the edges parallel to the Y axis.
   */
  height?: number;
  /**
   * Depth; that is, the length of the edges parallel to the Z axis.
   */
  depth?: number;
  /**
   * Number of segmented rectangular faces along the width of the sides.
   */
  widthSegments?: number;
  /**
   * Number of segmented rectangular faces along the height of the sides
   */
  heightSegments?: number;
  /**
   * Number of segmented rectangular faces along the depth of the sides.
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

watch(props, () => {
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
});

defineExpose({ three });
</script>
