<script lang="ts">
export default {
  name: "RingGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import RingGeometry from '../../examples/RingGeometry.vue'
  </script>

  `RingGeometry` is a simple component for a two-dimensional ring geometry.
  
  Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <RingGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[3, 3, 3]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <RingGeometry />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, RingGeometry, MeshNormalMaterial } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, reactive } from "vue";

import { BufferGeometry, Mesh, RingGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * Inner radius of the ring.
   * Must be smaller than `outerRadius`.
   */
  innerRadius?: number;

  /**
   * Outer radius of the ring.
   * Must be greater than `innerRadius`.
   */
  outerRadius?: number;

  /**
   * Number of radial segments.
   * A higher number means the ring will be more round
   * Minimum value is `3`.
   */
  thetaSegments?: number;

  /**
   * Number of segments over the ring thickness.
   */
  phiSegments?: number;

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
  innerRadius: 0.5,
  outerRadius: 1,
  thetaSegments: 32,
  phiSegments: 1,
  thetaStart: 0,
  thetaLength: 2 * Math.PI,
});

const mesh = inject("mesh") as Mesh;

function makeRing(
  innerRadius: number | undefined,
  outerRadius: number | undefined,
  thetaSegments: number | undefined,
  phiSegments: number | undefined,
  thetaStart: number | undefined,
  thetaLength: number | undefined,
) {
  return new RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makeRing(
    props.innerRadius,
    props.outerRadius,
    props.thetaSegments,
    props.phiSegments,
    props.thetaStart,
    props.thetaLength,
  );

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "innerRadius", redoGeometry);
handlePropCallback(props, "outerRadius", redoGeometry);
handlePropCallback(props, "thetaSegments", redoGeometry);
handlePropCallback(props, "phiSegments", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({ three });
</script>
