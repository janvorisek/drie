<script lang="ts">
export default {
  name: "WireframeGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import WireframeGeometry from '../../examples/WireframeGeometry.vue'
  </script>

  This component manages [`THREE.WireframeGeometry`](https://threejs.org/docs/#api/en/geometries/WireframeGeometry).

  ## Example

  <ClientOnly>
  <WireframeGeometry />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, nextTick, watch, reactive } from "vue";

import { BufferGeometry, WireframeGeometry, Mesh } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Target geometry name
   */
  geometry: string;
}

const props = withDefaults(defineProps<Props>(), {
  //
});

const mesh = inject("mesh") as Mesh;

const three = reactive(new BufferGeometry());
mesh.geometry = three;

const getGeometry = inject("getGeometry") as (g: string) => BufferGeometry;
const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = new WireframeGeometry(getGeometry(props.geometry));
  //console.log(tmp);
  copyGeo(three, tmp);
}

let unwatch = watch(
  getGeometry(props.geometry),
  () => {
    redoGeometry();
  },
  { deep: true, immediate: true },
);

handlePropCallback(props, "geometry", () => {
  unwatch();
  unwatch = watch(
    getGeometry(props.geometry),
    () => {
      redoGeometry();
    },
    { immediate: true, deep: true },
  );
});

const waitUntilGeometryChanged = () => {
  if (getGeometry(props.geometry) === undefined) nextTick(() => waitUntilGeometryChanged);
  else redoGeometry();
};

nextTick(() => waitUntilGeometryChanged);

defineExpose({ three });
</script>
