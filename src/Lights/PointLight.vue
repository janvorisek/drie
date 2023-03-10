<script lang="ts">
export default {
  name: "PointLight",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.

## Example

### Code

```vue-html
<PointLight :position="[0, 0, 10]" :intensity="0.25" :cast-shadow="true" />
```
</docs>

<script setup lang="ts">
import { watch } from "vue";

import { Color, PointLight } from "three";
import { type Vector3Like } from "../types";
import { handleVectorProp, manageParentRelationship } from "../utils";

export interface Props {
  /**
   * If set to true light will cast dynamic shadows.
   */
  castShadow?: boolean;

  /**
   * Color of the light
   */
  color?: string | number;

  /**
   * Numeric value of the light's strength/intensity.
   */
  intensity?: number;

  /**
   * A Vector3Like representing the object's local position.
   */
  position?: Vector3Like;

  /**
   * A Vector3Like representing local rotation (see Euler angles), in radians.
   */
  rotation?: Vector3Like;

  /**
   * A Vector3Like representing the object's local scale.
   */
  scale?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: () => [1, 1, 1],
  color: 0xffffff,
  intensity: 1,
  castShadow: false,
});

const three = new PointLight();

manageParentRelationship(three);

handleVectorProp(props, "position", three);
handleVectorProp(props, "rotation", three);
handleVectorProp(props, "scale", three);

function applyProps(props: Props) {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
  three.castShadow = props.castShadow as boolean;
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

watch(
  () => props.castShadow,
  () => applyProps(props),
);

defineExpose({ three });
</script>
