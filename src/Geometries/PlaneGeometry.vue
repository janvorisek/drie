<script lang="ts">
export default {
  name: "PlaneGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import PlaneGeometry from '../../examples/PlaneGeometry.vue'
  </script>

  This component manages [`THREE.PlaneGeometry`](https://threejs.org/docs/#api/en/geometries/PlaneGeometry).

  ## Example

  <ClientOnly>
  <PlaneGeometry />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, watch, ref, reactive } from "vue";

import { BufferGeometry, Mesh, PlaneGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry
   */
  name?: string;

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
  name: "",
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

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makePlane(props.width, props.height, props.widthSegments, props.heightSegments);

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);

defineExpose({ three });
</script>
