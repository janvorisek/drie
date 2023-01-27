<script lang="ts">
export default {
  name: "LineDashedMaterial",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import LineDashedMaterial from '../../examples/LineDashedMaterial.vue'
  </script>

  A material for drawing dashed line geometries.
  
  Suitable for [`<Line />`](/components/Objects/Line), [`<LineSegments />`](/components/Objects/LineSegments) or [`<LineLoop />`](/components/Objects/LineLoop).

  ## Example

  <ClientOnly>
  <LineDashedMaterial />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, provide } from "vue";

import type { Mesh } from "three";
import { Color, LineDashedMaterial, Material } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;

  /**
   * The scale of the dashed part of a line.
   */
  scale?: number;

  /**
   * The size of the dash. This is both the gap with the stroke.
   */
  dashSize?: number;

  /**
   * The size of the gap.
   */
  gapSize?: number;

  /**
   * Name of the material
   */
  name?: string;

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
  scale: 1,
  dashSize: 3,
  gapSize: 1,
  opacity: 1,
  transparent: false,
  name: "",
});

const three = new LineDashedMaterial({ color: props.color });
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const addMaterial = inject("addMaterial") as (g: Material) => void;
addMaterial(three);

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.material = three;
}

function applyProps() {
  three.color = new Color(props.color);
  three.scale = props.scale;
  three.dashSize = props.dashSize;
  three.gapSize = props.gapSize;

  three.opacity = props.opacity;
  three.transparent = props.transparent;

  three.needsUpdate = true;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "scale", applyProps);
handlePropCallback(props, "dashSize", applyProps);
handlePropCallback(props, "gapSize", applyProps);
handlePropCallback(props, "opacity", applyProps);
handlePropCallback(props, "transparent", applyProps);

provide("material", three);

defineExpose({
  /**
   * You can access the managed `THREE.LineDashedMaterial` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <LineDashedMaterial ref="material" />
   * ```
   *
   * ```ts
   * const material = ref(null);
   *
   * onMounted(() => {
   * // Do something with the THREE.LineDashedMaterial instance
   * const threeMaterial = material.value.three;
   * })
   * ```
   */
  three,
});
</script>
