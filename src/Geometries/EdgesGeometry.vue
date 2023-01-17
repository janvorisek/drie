<script lang="ts">
export default {
  name: "EdgesGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import EdgesGeometry from '../../examples/EdgesGeometry.vue'
  </script>

  This component can be used as a helper object to view the edges of a geometry.

  `<EdgesGeometry>` should be passed into the [`<LineSegments>`](/components/Objects/LineSegments).

  The required property `geometry` specifies a name of any geometry in the scene. It is recalculated whenever the target geometry changes.
  
  ## Example

  <ClientOnly>
  <EdgesGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{9,13}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh :rotation="rot">
            <BoxGeometry name="box" :width="6" :height="4" :depth="2" />
            <MeshNormalMaterial :transparent="true" :opacity="0.5" />
          </Mesh>
          <LineSegments :rotation="rot">
            <EdgesGeometry geometry="box" />
            <LineBasicMaterial color="black" />
          </LineSegments>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from "vue";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, PlaneGeometry, MeshNormalMaterial } from "@janvorisek/drie";
    import { EdgesGeometry, LineBasicMaterial, LineSegments } from "@janvorisek/drie";

    const rot = ref<[number, number, number]>([0, 0, 0]);

    window.setInterval(() => {
      const angle = Date.now() / 1000;
      rot.value = [Math.cos(angle), 0, 0];
    }, 10);
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, nextTick, watch, reactive } from "vue";

import { BufferGeometry, EdgesGeometry, Mesh, Line } from "three";
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
  const tmp = new EdgesGeometry(getGeometry(props.geometry));
  //console.log(tmp);
  copyGeo(three, tmp);

  const line = mesh as unknown as Line;
  if ("isLine" in line) line.computeLineDistances();
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
