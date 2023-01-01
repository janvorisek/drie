<script lang="ts">
export default {
  name: "SphereGeometry",
  render: () => null,
};
</script>

<docs>
  This works
</docs>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { SphereGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  radius?: number;
  widthSegments?: number;
  heightSegments?: number;
  phiStart?: number;
  phiLength?: number;
  thetaStart?: number;
  thetaLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
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

const three = ref<BufferGeometry>(
  makeSphere(
    props.radius,
    props.widthSegments,
    props.heightSegments,
    props.phiStart,
    props.phiLength,
    props.thetaStart,
    props.thetaLength,
  ),
);

mesh.geometry = three.value;

function redoGeometry() {
  mesh.geometry.dispose();
  mesh.geometry = makeSphere(
    props.radius,
    props.widthSegments,
    props.heightSegments,
    props.phiStart,
    props.phiLength,
    props.thetaStart,
    props.thetaLength,
  );
  three.value = mesh.geometry;
}

handlePropCallback(props, "radius", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "phiStart", redoGeometry);
handlePropCallback(props, "phiLength", redoGeometry);
handlePropCallback(props, "thetaStart", redoGeometry);
handlePropCallback(props, "thetaLength", redoGeometry);

defineExpose({ three });
</script>
