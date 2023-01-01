<script lang="ts">
export default {
  name: "AmbientLight",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch } from "vue";

import { Color, AmbientLight, Scene } from "three";

export interface Props {
  color?: string | number;
  intensity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  intensity: 1,
});

const scene = inject("scene") as Scene;

const three = new AmbientLight();
scene.add(three);

function applyProps(props: Props) {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

watch(
  () => props.intensity,
  () => applyProps(props),
);

defineExpose({ three });
</script>
