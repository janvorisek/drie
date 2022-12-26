<script lang="ts">
export default {
  name: "MeshBasicMaterial",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, ref, watch } from "vue";

import { FrontSide, Mesh, type Side } from "three";
import { Color, MeshBasicMaterial } from "three";

export interface Props {
  color?: string | number;
  side?: Side;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  side: FrontSide,
});

const mesh = inject("mesh") as Mesh;

const three = ref<MeshBasicMaterial>(new MeshBasicMaterial());
mesh.material = three.value;

function applyProps(props: any) {
  if (props.color) three.value.color = new Color(props.color);
  if (props.side) three.value.side = props.side;
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
