<script lang="ts">
export default {
  name: "PointsMaterial",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

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

const three = new PointsMaterial({ color: props.color, sizeAttenuation: props.sizeAttenuation, size: props.size });
mesh.material = three;

function applyProps(props: Props) {
  if (props.color) three.color = new Color(props.color);
  if (props.size) three.size = props.size;
  if (props.sizeAttenuation !== undefined) three.sizeAttenuation = props.sizeAttenuation;
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

watch(
  () => props.size,
  () => applyProps(props),
);

watch(
  () => props.sizeAttenuation,
  () => applyProps(props),
);

provide("material", three);

defineExpose({ three });
</script>
