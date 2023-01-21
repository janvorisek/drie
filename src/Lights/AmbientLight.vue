<script lang="ts">
export default {
  name: "AmbientLight",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
This light globally illuminates all objects in the scene equally.

This light cannot be used to cast shadows as it does not have a direction.

## Example

### Code

```vue-html
<AmbientLight :color="0xffffff" />
```
</docs>

<script setup lang="ts">
import { inject, watch } from "vue";

import { Color, AmbientLight, Scene } from "three";

export interface Props {
  /**
   * Color of the light
   */
  color?: string | number;

  /**
   * Numeric value of the light's strength/intensity.
   */
  intensity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xffffff,
  intensity: 1,
});

const scene = inject("scene") as Scene;

const three = new AmbientLight();
scene.add(three);

function applyProps(props: Props) {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
}

applyProps(props);

watch(
  () => props.color,
  () => applyProps(props),
);

watch(
  () => props.intensity,
  () => applyProps(props),
);

defineExpose({ three });
</script>
