<script lang="ts">
export default {
  name: "CylinderGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import CylinderGeometry from '../../examples/CylinderGeometry.vue'
  </script>

  `CylinderGeometry` is a simple component for creating a cylinder with given `topRadius`, `bottomRadius` and `height`.

  Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <CylinderGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[4, 4, 7]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="[Math.PI/2, 0, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <CylinderGeometry name="geo" :radius-top="2" :radius-bottom="2" :height="5" :radial-segments="12" />
        </Mesh>
      </Scene>
    </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, CylinderGeometry, MeshNormalMaterial } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, reactive } from "vue";

import { BufferGeometry, Mesh, CylinderGeometry } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * Radius of the cylinder at the top.
   */
  radiusTop?: number;

  /**
   * Radius of the cylinder at the bottom.
   */
  radiusBottom?: number;

  /**
   * Height of the cylinder.
   */
  height?: number;

  /**
   * Number of segmented faces around the circumference of the cylinder.
   * Minimum value is `3`.
   */
  radialSegments?: number;

  /**
   * Number of rows of faces along the height of the cylinder.
   * Minimum value is `1`.
   */
  heightSegments?: number;

  /**
   * A Boolean indicating whether the base of the cylinder is open or capped.
   * Default is `false`, meaning capped.
   */
  openEnded?: boolean;

  /**
   * Start angle for first segment.
   */
  thetaStart?: number;

  /**
   * The central angle, often called theta, of the circular sector.
   * The default is `2π`, which makes for a complete cylinder.
   */
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  radiusTop: 1,
  radiusBottom: 1,
  height: 1,
  radialSegments: 32,
  heightSegments: 1,
  openEnded: false,
  thetaStart: 0,
  thetaLength: 2 * Math.PI,
});

const mesh = inject("mesh") as Mesh;

function makeCylinder(
  radiusTop: number | undefined,
  radiusBottom: number | undefined,
  height: number | undefined,
  radialSegments: number | undefined,
  heightSegments: number | undefined,
  openEnded: boolean | undefined,
  thetaStart: number | undefined,
  thetaLength: number | undefined,
) {
  return new CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength,
  );
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makeCylinder(
    props.radiusTop,
    props.radiusBottom,
    props.height,
    props.radialSegments,
    props.heightSegments,
    props.openEnded,
    props.thetaStart,
    props.thetaLength,
  );

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "radiusTop", redoGeometry);
handlePropCallback(props, "radiusBottom", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "radialSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "openEnded", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({ three });
</script>
