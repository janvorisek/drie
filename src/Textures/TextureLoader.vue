<script lang="ts">
export default {
  name: "TextureLoader",
  render: () => null,
};
</script>

<script setup lang="ts">
import { inject, ref } from "vue";

import { Texture, TextureLoader, Material, type Wrapping, ClampToEdgeWrapping } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   *  The path or URL to the texture file. This can also be a Data URI.
   */
  url: string;

  /**
   * This defines how the texture is wrapped horizontally and corresponds to U in UV mapping.
   * The default is `THREE.ClampToEdgeWrapping`, where the edge is clamped to the outer edge texels.
   * The other two choices are `THREE.RepeatWrapping` and `THREE.MirroredRepeatWrapping`.
   * See the [texture constants](https://threejs.org/docs/?q=texture#api/en/constants/Textures) page for details.
   */
  wrapS?: Wrapping;

  /**
   * This defines how the texture is wrapped vertically and corresponds to V in UV mapping.
   * The default is `THREE.ClampToEdgeWrapping`, where the edge is clamped to the outer edge texels.
   * The other two choices are `THREE.RepeatWrapping` and `THREE.MirroredRepeatWrapping`.
   * See the [texture constants](https://threejs.org/docs/?q=texture#api/en/constants/Textures) page for details.
   */
  wrapT?: Wrapping;
}

const props = withDefaults(defineProps<Props>(), {
  wrapS: ClampToEdgeWrapping,
  wrapT: ClampToEdgeWrapping,
});

const material = inject("material") as Material;

const three = ref<Texture>(new Texture());

function load() {
  three.value = new TextureLoader().load(props.url);
  if ("map" in material) material.map = three.value;

  applyProps();
}

function applyProps() {
  three.value.wrapS = props.wrapS;
  three.value.wrapT = props.wrapT;

  three.value.needsUpdate = true;
}

load();

handlePropCallback(props, "url", load);

handlePropCallback(props, "wrapS", applyProps);
handlePropCallback(props, "wrapT", applyProps);

defineExpose({ three });
</script>
