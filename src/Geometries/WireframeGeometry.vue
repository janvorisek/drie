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

  This component can be used as a helper object to view a geometry as a wireframe.

  `<WireframeGeometry>` should be passed into the [`<LineSegments>`](/components/Objects/LineSegments).

  The required property `geometry` specifies a name of any geometry in the scene. It is recalculated whenever the target geometry changes.

  ## Example

  <ClientOnly>
  <WireframeGeometry />
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
          <WireframeGeometry geometry="box" />
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
    import { WireframeGeometry, LineBasicMaterial, LineSegments } from "@janvorisek/drie";

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

import { BufferGeometry, WireframeGeometry, Mesh, Line } from "three";
import { handlePropCallback, copyGeo } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Target geometry name
   */
  geometry: string;
}

const props = withDefaults(defineProps<Props>(), {
  //
});

const three = reactive(new BufferGeometry());

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.geometry = three;
}

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry(geometry: BufferGeometry) {
  const tmp = new WireframeGeometry(geometry);
  copyGeo(three, tmp);

  const line = mesh as unknown as Line;
  if ("isLine" in line) line.computeLineDistances();
}

EventBus.geometryChanged.on(props.geometry, (geometry) => {
  redoGeometry(geometry);
});

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <WireframeGeometry ref="geometry" />
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
