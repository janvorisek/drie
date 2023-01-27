<script lang="ts">
export default {
  name: "PointsMaterial",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import PointsMaterial from '../../examples/PointsMaterial.vue'
  </script>

  A material for drawing [`<Points />`](/components/Objects/Points).

  ## Example

  <ClientOnly>
    <PointsMaterial />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, provide } from "vue";

import type { Mesh } from "three";
import { Color, PointsMaterial, Material } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;

  /**
   * Specify whether points' size is attenuated by the camera depth.
   * _(Perspective camera only)_
   */
  sizeAttenuation?: boolean;

  /**
   * Name of the material
   */
  name?: string;

  /**
   * Defines the size of the points in pixels.
   */
  size?: number;

  /**
   * Float in the range of `0.0 - 1.0` indicating how transparent the material is.
   */
  opacity?: number;

  /**
   * Defines whether this material is transparent.
   */
  transparent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  sizeAttenuation: true,
  size: 1,
  opacity: 1,
  transparent: false,
  name: "",
});

const three = new PointsMaterial({ color: props.color, sizeAttenuation: props.sizeAttenuation, size: props.size });
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const mesh = inject<Mesh | null>("mesh", null);

const addMaterial = inject("addMaterial") as (g: Material) => void;
addMaterial(three);

if (mesh) {
  mesh.material = three;
}

function applyProps() {
  three.color = new Color(props.color);
  three.size = props.size;
  three.sizeAttenuation = props.sizeAttenuation;

  three.opacity = props.opacity;
  three.transparent = props.transparent;

  three.needsUpdate = true;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "size", applyProps);
handlePropCallback(props, "sizeAttenuation", applyProps);
handlePropCallback(props, "opacity", applyProps);
handlePropCallback(props, "transparent", applyProps);

provide("material", three);

defineExpose({
  /**
   * You can access the managed `THREE.PointsMaterial` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <PointsMaterial ref="material" />
   * ```
   *
   * ```ts
   * const material = ref(null);
   *
   * onMounted(() => {
   * // Do something with the THREE.PointsMaterial instance
   * const threeMaterial = material.value.three;
   * })
   * ```
   */
  three,
});
</script>
