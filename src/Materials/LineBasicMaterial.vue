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
import { Color, LineBasicMaterial } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Color of the material.
   */
  color?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
});

const mesh = inject("mesh") as Mesh;

const three = new LineBasicMaterial({ color: props.color });
mesh.material = three;

function applyProps() {
  if (props.color) three.color = new Color(props.color);

  three.needsUpdate = true;
}

applyProps();

handlePropCallback(props, "color", applyProps);

provide("material", three);

defineExpose({ three });
</script>
