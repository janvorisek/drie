<script lang="ts">
export default {
  name: "TextureLoader",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
Component for asynchronously loading a texture. It internally manages `THREE.Texture`.
</docs>

<script setup lang="ts">
import { inject, ref } from "vue";

import { Texture, TextureLoader, Material, type Wrapping, ClampToEdgeWrapping } from "three";
import { handlePropCallback, handleVector2Prop } from "../utils";
import { Vector2Like } from "../types";

export interface Props {
  /**
   * How much a single repetition of the texture is offset from the beginning, in each direction U and V.
   * Typical range is `0.0` to `1.0`.
   */
  offset?: Vector2Like;

  /**
   * How many times the texture is repeated across the surface, in each direction U and V.
   * If repeat is set greater than 1 in either direction, the corresponding Wrap parameter should also be set to `THREE.RepeatWrapping` or `THREE.MirroredRepeatWrapping` to achieve the desired tiling effect.
   * Setting different repeat values for textures is restricted in the same way like `offset`.
   */
  repeat?: Vector2Like;

  /**
   * How much the texture is rotated around the center point, in radians.
   * Positive values are counter-clockwise.
   */
  rotation?: number;

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
  offset: () => [0, 0],
  repeat: () => [1, 1],
  rotation: 0,
});

const material = inject("material") as Material;

const three = ref<Texture>(new Texture());

function load() {
  new TextureLoader().loadAsync(props.url).then((texture) => {
    three.value = texture;
    if ("map" in material) {
      material.map = three.value;
      material.needsUpdate = true;
    }
    applyProps();
  });
}

function applyProps() {
  three.value.wrapS = props.wrapS;
  three.value.wrapT = props.wrapT;
  three.value.rotation = props.rotation;

  three.value.needsUpdate = true;
}

load();

handlePropCallback(props, "url", load);
handlePropCallback(props, "wrapS", applyProps);
handlePropCallback(props, "wrapT", applyProps);
handlePropCallback(props, "rotation", applyProps);

handleVector2Prop(props, "offset", three.value);
handleVector2Prop(props, "repeat", three.value);

defineExpose({ three });
</script>
