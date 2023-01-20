<script lang="ts">
export default {
  name: "LineBasicMaterial",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import LineBasicMaterial from '../../examples/LineBasicMaterial.vue'
  </script>

  A material for drawing line geometries.
  
  Suitable for [`<Line />`](/components/Objects/Line), [`<LineSegments />`](/components/Objects/LineSegments) or [`<LineLoop />`](/components/Objects/LineLoop).

  ## Example

  <ClientOnly>
  <LineBasicMaterial />
  </ClientOnly>
</docs>

<script setup lang="ts">
import { inject, provide } from "vue";

import type { Mesh } from "three";
import { Color, LineBasicMaterial, Material } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;

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
  opacity: 1,
  transparent: false,
  name: "",
});

const three = new LineBasicMaterial({ color: props.color });
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;

const addMaterial = inject("addMaterial") as (g: Material) => void;
addMaterial(three);

const mesh = inject<Mesh | null>("mesh", null);

if (mesh) {
  mesh.material = three;
}

function applyProps() {
  if (props.color) three.color = new Color(props.color);

  three.opacity = props.opacity;
  three.transparent = props.transparent;

  three.needsUpdate = true;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "opacity", applyProps);
handlePropCallback(props, "transparent", applyProps);

provide("material", three);

defineExpose({ three });
</script>
