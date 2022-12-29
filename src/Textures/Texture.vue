<script lang="ts">
export default {
  name: "Texture",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, ref, watch } from "vue";

import { Texture, TextureLoader, Material } from "three";

export interface Props {
  url: string;
}

const props = withDefaults(defineProps<Props>(), {
  //
});

const material = inject("material") as Material;

const three = ref<Texture>(new Texture());

function applyProps(props: Props) {
  if ("map" in material) material.map = new TextureLoader().load(props.url);
}

applyProps(props);
watch(props, () => applyProps(props));

defineExpose({ three });
</script>
