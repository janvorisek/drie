<script lang="ts">
export default {
  name: "BufferGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
    import BufferGeometry from '../../examples/BufferGeometry.vue'
  </script>

  A representation of mesh, line, or point geometry. Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers.
  
  Indexed buffer geometry will be used if non-empty `faces` prop is provided.

  Any modifications to the `vertices` and `faces` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

  ## Example

  <ClientOnly>
  <BufferGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true" :frame-limit="30">
        <PerspectiveCamera :position="[3,3,3]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh :position="[1, 1, 0]">
            <MeshNormalMaterial :side="DoubleSide" />
            <BufferGeometry :vertices="vertices" :normals="true" />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { reactive } from "vue";
    import { DoubleSide } from "three";

    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, BufferGeometry, MeshNormalMaterial } from "@janvorisek/drie";

    // Flat array of 3 faces, may be updated
    const vertices = reactive<number[]>([
      -1.0, -1.0,  2.0,
      1.0, -1.0,  0.0,
      1.0,  1.0,  1.0,
      -1.0, -1.0,  2.0,
      1.0, -1.0,  0.0,
      1.0, -2.0,  1.0,
      1.0,  1.0,  1.0,
      -1.0,  1.0,  1.0,
      -1.0, -1.0,  2.0
    ]);
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, watch, reactive, onMounted } from "vue";

import { BufferAttribute, BufferGeometry, Mesh } from "three";
import { copyGeo } from "../utils";
import EventBus from "../EventBus";

export interface Props {
  /**
   * Name of the geometry.
   */
  name?: string;

  /**
   * Flat array of vertex coordinates.
   */
  vertices?: number[];

  /**
   * Flat array of triangular faces.
   * Indexed [THREE.BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry) will be used if non-empty array is provided.
   */
  faces?: number[];

  /**
   * Flat array of vertex UVs.
   */
  uvs?: number[];

  /**
   * Flat array of vertex normals.
   * Use `true` for automated calculation of vertex normals
   */
  normals?: number[] | boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  vertices: () => [],
  faces: () => [],
  uvs: () => [],
  normals: false,
});

function makeGeometry() {
  const geometry = new BufferGeometry();

  const vertArray = new Float32Array(props.vertices);

  geometry.setAttribute("position", new BufferAttribute(vertArray, 3));

  if (props.uvs.length > 0) {
    const uvArray = new Float32Array(props.uvs);
    geometry.setAttribute("uv", new BufferAttribute(uvArray, 2));
  }

  if (props.normals === true) {
    geometry.computeVertexNormals();
    geometry.attributes.normal.needsUpdate = true;
  }

  if (Array.isArray(props.normals)) {
    const nArray = new Float32Array(props.normals);
    geometry.setAttribute("normal", new BufferAttribute(nArray, 3));
  }

  if (props.faces.length > 0) geometry.setIndex(props.faces);

  return geometry;
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
  const tmp = makeGeometry();

  copyGeo(three, tmp);

  EventBus.geometryChanged(props.name, three);
}

onMounted(redoGeometry);

watch(
  () => props.vertices,
  (vertices) => {
    redoGeometry();
  },
  { deep: true },
);

watch(
  () => props.faces,
  (faces) => {
    redoGeometry();
  },
  { deep: true },
);

defineExpose({
  /**
   * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <BufferGeometry ref="geometry" />
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
