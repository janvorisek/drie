<script lang="ts">
export default {
  name: "CircleGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import CircleGeometry from '../../examples/CircleGeometry.vue'
  </script>

  `CircleGeometry` is a simple component for a circle with given `radius`. It is constructed from a number of triangular `segments`. It is built counter-clockwise from a start angle and a given central angle.
  
  It can also be used to create regular polygons, where the number of segments determines the number of sides.
  
  Any modifications to the `radius`, `segments`, `thetaStart` and `thetaLength` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <CircleGeometry />
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
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <CircleGeometry :radius="4" />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, CircleGeometry, MeshNormalMaterial } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, reactive } from "vue";

import { BufferGeometry, Mesh, CircleGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";

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
   * Number of segments (triangles).
   * Minimum value is `3`.
   */
  segments?: number;

  /**
   * Start angle for first segment.
   */
  thetaStart?: number;

  /**
   * The central angle, often called theta, of the circular sector.
   * The default is `2π`, which makes for a complete circle.
   */
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  radius: 1,
  segments: 32,
  thetaStart: 0,
  thetaLength: 2 * Math.PI,
});

function makeCircle(
  radius: number | undefined,
  segments: number | undefined,
  thetaStart: number | undefined,
  thetaLength: number | undefined,
) {
  return new CircleGeometry(radius, segments, thetaStart, thetaLength);
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
  const tmp = makeCircle(props.radius, props.segments, props.thetaStart, props.thetaLength);

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "radius", redoGeometry);
handlePropCallback(props, "segments", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <CircleGeometry ref="geometry" />
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
