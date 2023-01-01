<script lang="ts">
export default {
  name: "TextureLoader",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, ref, watch } from "vue";

import { Texture, TextureLoader, Material } from "three";

export interface Props {
  /**
   *  The path or URL to the texture file. This can also be a Data URI.
   */
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
watch(
  () => props.url,
  () => applyProps(props),
);

defineExpose({ three });
</script>
