<script lang="ts">
export default {
  name: "LineBasicMaterial",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import LineBasicMaterial from '../../examples/LineBasicMaterial.vue'
  import { computed, ref } from 'vue';
  const demo = ref('');
  
  const liveCode = computed(() => {
    return `<LineBasicMaterial
  color="${demo.value.color}"
  :transparent="${demo.value.transparent}"
  :opacity="${Math.round(demo.value.opacity*100)/100}"
/>`
    });

  </script>

  A material for drawing line geometries.
  
  Suitable for [`<Line />`](/components/Objects/Line), [`<LineSegments />`](/components/Objects/LineSegments) or [`<LineLoop />`](/components/Objects/LineLoop).

  ## Example

  <ClientOnly>
  <LineBasicMaterial ref="demo" />
  </ClientOnly>

  ### Code

  Note: *The following code is updated according to the properties set above.*

  <ClientOnly>
  <LiveCodeBlock lang="vue-html" :code="liveCode" />
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

defineExpose({
  /**
   * You can access the managed `THREE.LineBasicMaterial` instance using the exposed `three` property.
   *
   * #### Example code
   * ```vue-html
   * <LineBasicMaterial ref="material" />
   * ```
   *
   * ```ts
   * const material = ref(null);
   *
   * onMounted(() => {
   * // Do something with the THREE.LineBasicMaterial instance
   * const threeMaterial = material.value.three;
   * })
   * ```
   */
  three,
});
</script>
