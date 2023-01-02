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

  This component manages [`THREE.SphereGeometry`](https://threejs.org/docs/#api/en/geometries/SphereGeometry).

  ## Example

  <ClientOnly>
  <SphereGeometry />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, watch, ref, reactive } from "vue";

import { SphereGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry
   */
  name?: string;

  radius?: number;
  widthSegments?: number;
  heightSegments?: number;
  phiStart?: number;
  phiLength?: number;
  thetaStart?: number;
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  radius: 1,
  widthSegments: 8,
  heightSegments: 6,
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
