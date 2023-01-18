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
import { inject, watch, provide } from "vue";

import type { Mesh } from "three";
import { Color, PointsMaterial } from "three";

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
   * Defines the size of the points in pixels.
   */
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  sizeAttenuation: true,
  size: 1,
});

const mesh = inject("mesh") as Mesh;

const three = new PointsMaterial({ color: props.color, sizeAttenuation: props.sizeAttenuation, size: props.size });
mesh.material = three;

function applyProps(props: Props) {
  three.color = new Color(props.color);
  three.size = props.size as number;
  three.sizeAttenuation = props.sizeAttenuation as boolean;

  three.needsUpdate = true;
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

watch(
  () => props.size,
  () => applyProps(props),
);

watch(
  () => props.sizeAttenuation,
  () => applyProps(props),
);

provide("material", three);

defineExpose({ three });
</script>
