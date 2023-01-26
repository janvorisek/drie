<script lang="ts">
export default {
  name: "HemisphereLight",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
A light source positioned directly above the scene, with color fading from the sky color to the ground color.

This light cannot be used to cast shadows.

## Example

### Code

```vue-html
<HemisphereLight :sky-color="0xffffff" :ground-color="0xffffff" />
```
</docs>

<script setup lang="ts">
import { inject } from "vue";

import { Color, HemisphereLight, Scene } from "three";
import { handlePropCallback } from "~/utils";

export interface Props {
  /**
   * The ground color.
   */
  groundColor?: string | number;

  /**
   * Numeric value of the light's strength/intensity.
   */
  intensity?: number;

  /**
   * The sky color.
   */
  skyColor?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  skyColor: 0xffffff,
  groundColor: 0xffffff,
  intensity: 1,
});

const scene = inject("scene") as Scene;

const three = new HemisphereLight();
scene.add(three);

function applyProps() {
  three.color = new Color(props.skyColor);
  three.groundColor = new Color(props.groundColor);
  three.intensity = props.intensity as number;
}

applyProps();

handlePropCallback(props, "skyColor", applyProps);
handlePropCallback(props, "groundColor", applyProps);
handlePropCallback(props, "intensity", applyProps);

defineExpose({ three });
</script>
