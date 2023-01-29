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

  ::: details Click me to view the example code
  ```vue{10,25-32}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[10, 10, 10]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <ParametricGeometry
              name="geo"
              :function="func"
              :slices="16"
              :stacks="16"
            />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { DoubleSide, Vector3 } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, ParametricGeometry, MeshNormalMaterial } from "@janvorisek/drie";

    // Parametric equation may be implemented in a following way
    const func = (u: number, v: number, target: Vector3) => {
      u = u - 0.5;
      v = v - 0.5;
      const x = u * u + v * v;
      const y = u;
      const z = v;
      target.set(10 * x, 10 * y, 10 * z);
    }
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";

import { BufferGeometry, Mesh, Vector3 } from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry";
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries";

import { handlePropCallback, copyGeo } from "../utils";
import EventBus from "../EventBus";

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

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.geometry = three;
}

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makePlane(props.function, props.slices, props.stacks);

  copyGeo(three, tmp);

  EventBus.geometryChanged(props.name, three);
}

onMounted(redoGeometry);

handlePropCallback(props, "function", redoGeometry);
handlePropCallback(props, "stacks", redoGeometry);
handlePropCallback(props, "slices", redoGeometry);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <ParametricGeometry ref="geometry" />
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
