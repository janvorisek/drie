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
  ```vue{9,13}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true" :frame-limit="30">
        <PerspectiveCamera :position="[3,3,3]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh :position="[1, 1, 0]">
            <MeshNormalMaterial :side="DoubleSide" />
            <BufferGeometry name="geo" :vertices="vertices" />
          </Mesh>
          <LineSegments :position="[1, 1, 0]">
            <WireframeGeometry geometry="geo" />
            <LineBasicMaterial color="black" />
          </LineSegments>
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
    import { WireframeGeometry, LineBasicMaterial, LineSegments } from "@janvorisek/drie";

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
import { inject, watch, reactive } from "vue";

import { BufferAttribute, BufferGeometry, Mesh } from "three";
import { copyGeo } from "../utils";

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
   * Indexed [THREE.BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry) will be used then non-empty array is provided.
   */
  faces?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  vertices: () => [],
  faces: () => [],
});

const mesh = inject("mesh") as Mesh;

function makeGeometry(vertices: number[], faces: number[]) {
  const geometry = new BufferGeometry();

  const vertArray = new Float32Array(vertices.length);
  for (let v = 0; v < vertices.length; v++) {
    /*const tmp = vector3LikeToArray(vertices[v]);
    vertArray[v * 3] = tmp[0];
    vertArray[v * 3 + 1] = tmp[1];
    vertArray[v * 3 + 2] = tmp[2];*/

    vertArray[v] = vertices[v];
  }

  geometry.setAttribute("position", new BufferAttribute(vertArray, 3));
  if (props.faces.length > 0) geometry.setIndex(faces);
  geometry.computeVertexNormals();

  return geometry;
}

const three = reactive(makeGeometry(props.vertices, props.faces));
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry(vertices: number[], faces: number[]) {
  const tmp = makeGeometry(vertices, faces);

  copyGeo(three, tmp);
}

watch(
  () => props.vertices,
  (vertices) => {
    redoGeometry(vertices, props.faces);
  },
  { deep: true, immediate: true },
);

watch(
  () => props.faces,
  (faces) => {
    redoGeometry(props.vertices, faces);
  },
  { deep: true, immediate: true },
);

defineExpose({ three });
</script>
