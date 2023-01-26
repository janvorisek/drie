<script lang="ts">
export default {
  name: "DirectionalLight",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
A light that gets emitted in a specific direction. This light will behave as though it is infinitely far away and the rays produced from it are all parallel. The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.

This light can cast shadows.

## Example

### Code

```vue-html
<DirectionalLight :color="0xffffff" />
```
</docs>

<script setup lang="ts">
import { inject } from "vue";

import { Color, DirectionalLight, Scene } from "three";
import { handlePropCallback } from "../utils";

export interface Props {
  /**
   * Color of the light.
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

const three = new DirectionalLight();
scene.add(three);

function applyProps() {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "intensity", applyProps);

defineExpose({ three });
</script>
