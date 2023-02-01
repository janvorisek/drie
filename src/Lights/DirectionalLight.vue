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
import { Color, DirectionalLight } from "three";
import { handlePropCallback, handleVectorProp, manageParentRelationship } from "../utils";
import { type Vector3Like } from "../types";

export interface Props {
  /**
   * If set to true light will cast dynamic shadows.
   */
  castShadow?: boolean;

  /**
   * Color of the light.
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
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  castShadow: false,
  color: 0xffffff,
  intensity: 1,
});

const three = new DirectionalLight();

manageParentRelationship(three);

//scene.add(three.target);

function applyProps() {
  three.color = new Color(props.color);
  three.intensity = props.intensity as number;
  three.castShadow = props.castShadow;
}

applyProps();

handlePropCallback(props, "color", applyProps);
handlePropCallback(props, "intensity", applyProps);
handlePropCallback(props, "castShadow", applyProps);

handleVectorProp(props, "position", three);

defineExpose({ three });
</script>
