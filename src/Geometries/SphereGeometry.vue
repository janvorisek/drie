<script lang="ts">
export default {
  name: "SphereGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import SphereGeometry from '../../examples/SphereGeometry.vue'
  </script>

  SphereGeometry is a component for a sphere with a given `radius`. Incomplete spheres can be created through the use of different values of `phiStart`, `phiLength`, `thetaStart` and `thetaLength`.
  
  Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
  <SphereGeometry />
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
          <MeshLambertMaterial :color="0xeeaa55" />
          <SphereGeometry :radius="2" :width-segments="24" :height-segments="24" />
        </Mesh>
        <PointLight :position="rot" />
        <AmbientLight />
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from "vue";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, SphereGeometry, MeshLambertMaterial } from "@janvorisek/drie";
    import { PointLight, AmbientLight } from "@janvorisek/drie";

    const rot = ref<[number, number, number]>([0, 0, 0]);

    window.setInterval(() => {
      const angle = Date.now() / 1000;
      rot.value = [15*Math.cos(angle), 15*Math.sin(angle), 5];
    }, 10);
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, watch, ref, reactive } from "vue";

import { SphereGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * Sphere radius.
   */
  radius?: number;

  /**
   * Number of horizontal segments.
   * Minimum value is `3`.
   */
  widthSegments?: number;

  /**
   * Number of vertical segments.
   * Minimum value is `2`
   */
  heightSegments?: number;

  /**
   * Specify horizontal starting angle.
   */
  phiStart?: number;

  /**
   * Specify horizontal sweep angle size.
   */
  phiLength?: number;

  /**
   * Specify vertical starting angle
   */
  thetaStart?: number;

  /**
   * Specify vertical sweep angle size
   */
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  radius: 1,
  widthSegments: 32,
  heightSegments: 16,
  phiStart: 0,
  phiLength: 2 * Math.PI,
  thetaStart: 0,
  thetaLength: Math.PI,
});

const mesh = inject("mesh") as Mesh;

function makeSphere(
  radius: number | undefined,
  widthSegments: number | undefined,
  heightSegments: number | undefined,
  phiStart: number | undefined,
  phiLength: number | undefined,
  thetaStart: number | undefined,
  thetaLength: number | undefined,
) {
  return new SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makeSphere(
    props.radius,
    props.widthSegments,
    props.heightSegments,
    props.phiStart,
    props.phiLength,
    props.thetaStart,
    props.thetaLength,
  );

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "radius", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "phiStart", redoGeometry);
handlePropCallback(props, "phiLength", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({ three });
</script>
