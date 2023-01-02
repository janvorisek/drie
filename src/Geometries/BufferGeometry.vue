<script lang="ts">
export default {
  name: "BufferGeometry",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, ref, reactive } from "vue";

import { BufferAttribute, BufferGeometry, Mesh } from "three";
import { copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry
   */
  name?: string;

  /**
   * Flat array of vertex coordinates
   */
  vertices?: number[];

  /**
   * Flat array of triangular faces
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

  geometry.computeVertexNormals();

  return geometry;
}

const three = reactive(makeGeometry(props.vertices, props.faces));
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry(vertices: number[]) {
  const tmp = makeGeometry(vertices, []);

  copyGeo(three, tmp);
}

watch(
  () => props.vertices,
  (vertices) => {
    redoGeometry(vertices);
  },
  { deep: true, immediate: true },
);

defineExpose({ three });
</script>
