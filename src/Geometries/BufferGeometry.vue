<script lang="ts">
export default {
  name: "BufferGeometry",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { BufferAttribute, BufferGeometry, Mesh } from "three";

export interface Props {
  vertices?: number[];
  faces?: number[];
}

const props = withDefaults(defineProps<Props>(), {
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

  return geometry;
}

const three = ref<BufferGeometry>(makeGeometry(props.vertices, props.faces));
mesh.geometry = three.value;

function redoGeometry(vertices: number[]) {
  mesh.geometry.dispose();
  mesh.geometry = makeGeometry(vertices, []);
  mesh.geometry.computeVertexNormals();
  three.value = mesh.geometry;
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
