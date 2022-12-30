<script lang="ts">
export default {
  name: "PointLight",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, watch } from "vue";

import { Color, PointLight, Scene } from "three";
import { type Vector3Like } from "../types";
import { handleVectorProp } from "../utils";

export interface Props {
  position?: Vector3Like;
  rotation?: Vector3Like;
  scale?: Vector3Like;
  color?: string | number;
  intensity?: number;
  castShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  color: 0xffffff,
  intensity: 1,
  castShadow: false,
});

const scene = inject("scene") as Scene;

const three = new PointLight();
scene.add(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function applyProps(props: Props) {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
  three.castShadow = props.castShadow as boolean;
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
