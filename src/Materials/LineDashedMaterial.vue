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
import { Color, LineDashedMaterial } from "three";
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
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  scale: 1,
  dashSize: 3,
  gapSize: 1,
});

const mesh = inject("mesh") as Mesh;

const three = new LineDashedMaterial({ color: props.color });
mesh.material = three;

function applyProps() {
  three.color = new Color(props.color);
  three.scale = props.scale;
  three.dashSize = props.dashSize;
  three.gapSize = props.gapSize;

  three.needsUpdate = true;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "scale", applyProps);
handlePropCallback(props, "dashSize", applyProps);
handlePropCallback(props, "gapSize", applyProps);

provide("material", three);

defineExpose({ three });
</script>
