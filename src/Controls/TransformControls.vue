<script lang="ts">
export default {
  name: "TransformControls",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS

<script setup>
  import TransformControls from '../../examples/TransformControls.vue'
</script>

This component can be used to transform objects in 3D space by adapting a similar interaction model of DCC tools like Blender.

Unlike other controls, it is not intended to transform the scene's camera.

`<TransformControls>` can be passed to any object (`<Mesh>`, `<Group>`, etc.).

## Example

<ClientOnly>
<TransformControls />
</ClientOnly>

</docs>

<script setup lang="ts">
import { Camera, Mesh, Object3D, Scene } from "three";

import { TransformControls } from "three/examples/jsm/controls/TransformControls";

import { inject, onUnmounted, shallowRef, watch, type Ref } from "vue";
import { disposeTHREEObject, handlePropCallback, handleVectorProp } from "../utils";
import { type Vector3Like } from "../types";

export type Mode = "translate" | "rotate" | "scale";

export interface Props {
  /**
   * The current transformation mode.
   * Possible values are `"translate"`, `"rotate"` and `"scale"`.
   */
  mode?: Mode;

  /**
   * A [Vector3Like](/types#vector3like) representing the object's local position.
   * Default position equals to the transformed mesh position.
   */
  // eslint-disable-next-line vue/require-default-prop
  position?: Vector3Like;

  /**
   * By default, 3D objects are continuously rotated.
   * If you set this property to a numeric value (radians), you can define in which steps the 3D object should be rotated.
   * Set to `null` to disable snap.
   */
  rotationSnap?: number | null;

  /**
   * Whether or not the x-axis helper should be visible.
   */
  showX?: boolean;

  /**
   * Whether or not the y-axis helper should be visible.
   */
  showY?: boolean;

  /**
   * Whether or not the z-axis helper should be visible.
   */
  showZ?: boolean;

  /**
   * The size of the helper UI (axes/planes).
   */
  size?: number;

  /**
   * By default, 3D objects are continuously translated.
   * If you set this property to a numeric value (world units), you can define in which steps the 3D object should be translated.
   * Set to `null` to disable snap.
   */
  translationSnap?: number | null;
}

const props = withDefaults(defineProps<Props>(), {
  mode: "translate",
  size: 1,
  showX: true,
  showY: true,
  showZ: true,
  translationSnap: null,
  rotationSnap: null,
});

const three = shallowRef<TransformControls | null>(null);

const scene = inject("scene") as Scene;
const mesh = inject<Mesh | null>("mesh", null);
const parent = inject("parent", undefined) as Object3D | undefined;
const camera = inject<Ref<Camera>>("camera") as Ref<Camera>;
const canvas = inject<Ref<HTMLCanvasElement>>("canvas") as Ref<HTMLCanvasElement>;

const enableAllControls = inject("enableAllControls") as () => void;
const disableAllControls = inject("disableAllControls") as () => void;

//
function applyProps() {
  if (three.value == null) return;

  three.value.mode = props.mode;
  three.value.size = props.size;
  three.value.showX = props.showX;
  three.value.showY = props.showY;
  three.value.showZ = props.showZ;
  three.value.translationSnap = props.translationSnap;
  three.value.rotationSnap = props.rotationSnap;
}

let boundCamera = false;
const tryBindCamera = () => {
  if (!canvas.value && !camera.value) return;
  if (boundCamera) return;

  three.value = new TransformControls(camera.value, canvas.value);
  handleVectorProp(props, "position", three.value);

  if (mesh) {
    three.value.attach(mesh);
  } else if (parent) {
    three.value.attach(parent);
  }

  three.value.addEventListener("dragging-changed", function (event) {
    if (event.value) disableAllControls();
    else enableAllControls();
  });

  //console.log(three.value);
  scene.add(three.value);

  applyProps();

  boundCamera = true;
};

watch(canvas, () => {
  tryBindCamera();
});

applyProps();

handlePropCallback(props, "mode", applyProps);
handlePropCallback(props, "size", applyProps);
handlePropCallback(props, "showX", applyProps);
handlePropCallback(props, "showY", applyProps);
handlePropCallback(props, "showZ", applyProps);
handlePropCallback(props, "rotationSnap", applyProps);
handlePropCallback(props, "translationSnap", applyProps);

onUnmounted(() => {
  scene.remove(three.value as Object3D);
  disposeTHREEObject(three.value);
});

defineExpose({ three });
</script>
