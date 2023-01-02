<script lang="ts">
export default {
  name: "LineBasicMaterial",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch, provide } from "vue";

import type { Mesh } from "three";
import { Color, LineBasicMaterial } from "three";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
});

const mesh = inject("mesh") as Mesh;

const three = new LineBasicMaterial({ color: props.color });
mesh.material = three;

function applyProps(props: Props) {
  if (props.color) three.color = new Color(props.color);
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

provide("material", three);

defineExpose({ three });
</script>
