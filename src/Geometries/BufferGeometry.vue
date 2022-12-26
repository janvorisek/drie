<script lang="ts">
export default {
  name: "BufferGeometry",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, ref } from "vue";

import { BufferAttribute, BufferGeometry, Mesh } from "three";
import { type Vector3Like } from "../types";
import { vector3LikeToArray } from "../utils";

export interface Props {
  vertices?: Vector3Like[];
  faces?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  vertices: () => [],
  faces: () => [],
});

const mesh = inject("mesh") as Mesh;

function makeGeometry(vertices: Vector3Like[], faces: number[]) {
  const geometry = new BufferGeometry();

  const vertArray = new Float32Array(vertices.length * 3);
  for (let v = 0; v < vertices.length; v++) {
    const tmp = vector3LikeToArray(vertices[v]);
    vertArray[v * 3] = tmp[0];
    vertArray[v * 3 + 1] = tmp[1];
    vertArray[v * 3 + 2] = tmp[2];
  }

  geometry.setAttribute("position", new BufferAttribute(vertArray, 3));

  return geometry;
}

const three = ref<BufferGeometry>(makeGeometry(props.vertices, props.faces));
mesh.geometry = three.value;

watch(props, () => {
  mesh.geometry = makeGeometry(props.vertices, []);
  three.value = mesh.geometry;
});

defineExpose({ three });
</script>
