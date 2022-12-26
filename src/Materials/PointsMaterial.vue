<script lang="ts">
export default {
  name: "PointsMaterial",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, ref, watch } from "vue";

import type { Mesh } from "three";
import { Color, PointsMaterial } from "three";

export interface Props {
  color?: string | number;
  sizeAttenuation?: boolean;
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  sizeAttenuation: true,
  size: 1,
});

const mesh = inject("mesh") as Mesh;

const three = ref<PointsMaterial>(
  new PointsMaterial({ color: props.color, sizeAttenuation: props.sizeAttenuation, size: props.size }),
);
mesh.material = three.value;

function applyProps(props: any) {
  if (props.color) three.value.color = new Color(props.color);
  if (props.size) three.value.size = props.size;
  if (props.sizeAttenuation !== undefined) three.value.sizeAttenuation = props.sizeAttenuation;
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
