<script lang="ts">
export default {
  name: "Parametriceometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import ParametricGeometry from '../../examples/ParametricGeometry.vue'
  </script>

  ParametricGeometry represents a parametric surface using a function that takes in a `u` and `v` value each between 0 and 1.

  Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).
  
  ## Example

  <ClientOnly>
    <ParametricGeometry />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, reactive } from "vue";

import { BufferGeometry, Mesh, Vector3 } from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry";
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries";

import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * A function that takes in a `u` and `v` value each between 0 and 1 and modifies a third Vector3 argument.
   * Default is a function that generates a klein bottle
   */
  function?: (u: number, v: number, target: Vector3) => void;

  /**
   * The count of slices to use for the parametric function.
   */
  slices?: number;

  /**
   * The count of stacks to use for the parametric function.
   */
  stacks?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  function: ParametricGeometries.klein,
  slices: 8,
  stacks: 8,
});

const mesh = inject("mesh") as Mesh;

function makePlane(
  f: (u: number, v: number, target: Vector3) => void | undefined,
  slices: number | undefined,
  stacks: number | undefined,
) {
  return new ParametricGeometry(f, slices, stacks);
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makePlane(props.function, props.slices, props.stacks);

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "function", redoGeometry);
handlePropCallback(props, "stacks", redoGeometry);
handlePropCallback(props, "slices", redoGeometry);

defineExpose({ three });
</script>
