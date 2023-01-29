<script lang="ts">
export default {
  name: "ConeGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import ConeGeometry from '../../examples/ConeGeometry.vue'
  </script>

  `ConeGeometry` is a simple component for creating a cone with given `radius` and `height`.

  Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <ConeGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer ref="renderer" :antialias="true">
        <PerspectiveCamera :position="[6, 6, 3]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh :rotation="[Math.PI/2, 0, 0]">
            <MeshNormalMaterial :side="DoubleSide" />
            <ConeGeometry name="geo" :radius="4" :height="5" />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, ConeGeometry, MeshNormalMaterial } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";

import { BufferGeometry, Mesh, ConeGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * Radius of the circle.
   */
  radius?: number;

  /**
   * Height of the cone.
   */
  height?: number;

  /**
   * Number of segmented faces around the circumference of the cone.
   * Minimum value is `3`.
   */
  radialSegments?: number;

  /**
   * Number of rows of faces along the height of the cone.
   * Minimum value is `3`.
   */
  heightSegments?: number;

  /**
   * A Boolean indicating whether the base of the cone is open or capped.
   * Default is `false`, meaning capped.
   */
  openEnded?: boolean;

  /**
   * Start angle for first segment.
   */
  thetaStart?: number;

  /**
   * The central angle, often called theta, of the circular sector.
   * The default is `2π`, which makes for a complete cone.
   */
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  radius: 1,
  height: 1,
  radialSegments: 32,
  heightSegments: 1,
  openEnded: false,
  thetaStart: 0,
  thetaLength: 2 * Math.PI,
});

function makeCone(
  radius: number | undefined,
  height: number | undefined,
  radialSegments: number | undefined,
  heightSegments: number | undefined,
  openEnded: boolean | undefined,
  thetaStart: number | undefined,
  thetaLength: number | undefined,
) {
  return new ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
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
  const tmp = makeCone(
    props.radius,
    props.height,
    props.radialSegments,
    props.heightSegments,
    props.openEnded,
    props.thetaStart,
    props.thetaLength,
  );

  copyGeo(three, tmp);

  EventBus.geometryChanged(props.name, three);
}

onMounted(redoGeometry);

handlePropCallback(props, "radius", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "radialSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "openEnded", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <ConeGeometry ref="geometry" />
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
