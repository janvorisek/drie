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

  PlaneGeometry is a component for a rectangular plane with a given `width` and `height`. The plane is centred on the origin, with each edge parallel to the X and Y axes.
  
  Any modifications to the `width`, `height`, `widthSegments` and `heightSegments` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <PlaneGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh :rotation="rot">
            <MeshNormalMaterial :side="DoubleSide" />
            <PlaneGeometry :width="8" :height="6" />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from "vue";
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, PlaneGeometry, MeshNormalMaterial } from "@janvorisek/drie";

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
import { inject, onMounted, reactive } from "vue";

import { BufferGeometry, Mesh, PlaneGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";
import EventBus from "../EventBus";

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

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.geometry = three;
}

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makePlane(props.width, props.height, props.widthSegments, props.heightSegments);

  copyGeo(three, tmp);

  EventBus.geometryChanged(props.name, three);
  if (mesh) EventBus.object3DChanged(mesh.name, mesh);
}

onMounted(redoGeometry);

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <PlaneGeometry ref="geometry" />
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
