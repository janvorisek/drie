<script lang="ts">
export default {
  name: "OrbitControls",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import OrbitControls from '../../examples/OrbitControls.vue'
  </script>

  This component manages [`THREE.OrbitControls`](https://threejs.org/docs/#examples/en/controls/OrbitControls).

  `<OrbitControls>` must be passed to [`<PerspectiveCamera>`](/components/Cameras/PerspectiveCamera) or [`<OrthographicCamera>`](/components/Cameras/OrthographicCamera)

  ## Example

  <ClientOnly>
  <OrbitControls />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{5}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5,5,5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <OBJLoader
            :position="[0, 0, -0.6]"
            :rotation="[Math.PI / 2, Math.PI, 0]"
            :scale="[20, 20, 20]"
            url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
          >
            <MeshNormalMaterial />
          </OBJLoader>
          <AxesHelper :size="3" />
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { OBJLoader, MeshNormalMaterial } from "@janvorisek/drie";
    import { AxesHelper } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { Camera, Object3D } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { inject, ref, watch, type Ref } from "vue";
import { handlePropCallback, handleVectorProp } from "../utils";
import { type Vector3Like } from "../types";

export interface Props {
  /**
   * Enable or disable camera panning.
   */
  enablePan?: boolean;

  /**
   * Enable or disable horizontal and vertical rotation of the camera.
   * Note that it is possible to disable a single axis by setting the min and max of the polar angle or azimuth angle to the same value, which will cause the vertical or horizontal rotation to be fixed at that value.
   */
  enableRotate?: boolean;

  /**
   * Enable or disable zooming (dollying) of the camera.
   */
  enableZoom?: boolean;

  /**
   * How far you can zoom in.
   * `OrthographicCamera` only.
   */
  minZoom?: number;

  /**
   * How far you can zoom out.
   * `OrthographicCamera` only.
   */
  maxZoom?: number;

  /**
   * How far you can dolly in.
   * `PerspectiveCamera` only.
   */
  minDistance?: number;

  /**
   * How far you can dolly out.
   * `PerspectiveCamera` only.
   */
  maxDistance?: number;

  /**
   * How far you can orbit vertically, lower limit.
   * Range is 0 to Math.PI radians
   */
  minPolarAngle?: number;

  /**
   * How far you can orbit vertically, upper limit.
   * Range is 0 to Math.PI radians
   */
  maxPolarAngle?: number;

  /**
   * How far you can orbit horizontally, lower limit.
   * If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min < 2π).
   */
  minAzimuthAngle?: number;

  /**
   * How far you can orbit horizontally, upper limit.
   * If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min < 2π).
   */
  maxAzimuthAngle?: number;

  /**
   * The focus point of the controls.
   */
  target?: Vector3Like;
}

const props = withDefaults(defineProps<Props>(), {
  enablePan: true,
  enableRotate: true,
  enableZoom: true,
  minZoom: 0,
  maxZoom: Infinity,
  minDistance: 0,
  maxDistance: Infinity,
  minPolarAngle: 0,
  maxPolarAngle: Math.PI,
  minAzimuthAngle: Infinity,
  maxAzimuthAngle: Infinity,
  target: () => [0, 0, 0],
});

const three = ref<OrbitControls | null>(null);
(inject("addControls") as (c: Ref<OrbitControls | null>) => void)(three);

const camera = inject<Camera>("parentCamera") as Camera;
const canvas = inject<Ref<HTMLCanvasElement>>("canvas") as Ref<HTMLCanvasElement>;

function applyProps() {
  if (three.value == null) return;

  three.value.enablePan = props.enablePan;
  three.value.enableRotate = props.enableRotate;
  three.value.enableZoom = props.enableZoom;
  three.value.minZoom = props.minZoom;
  three.value.maxZoom = props.maxZoom;
  three.value.minDistance = props.minDistance;
  three.value.maxDistance = props.maxDistance;
  three.value.minPolarAngle = props.minPolarAngle;
  three.value.maxPolarAngle = props.maxPolarAngle;
  three.value.minAzimuthAngle = props.minAzimuthAngle;
  three.value.maxAzimuthAngle = props.maxAzimuthAngle;
}

let boundCamera = false;
const tryBindCamera = () => {
  if (!canvas.value) return;
  if (boundCamera) return;

  three.value = new OrbitControls(camera, canvas.value);
  applyProps();

  handleVectorProp(props, "target", three.value as unknown as Object3D);

  boundCamera = true;
};

watch(canvas, () => {
  tryBindCamera();
});

applyProps();

handlePropCallback(props, "enablePan", applyProps);
handlePropCallback(props, "enableRotate", applyProps);
handlePropCallback(props, "enableZoom", applyProps);
handlePropCallback(props, "minZoom", applyProps);
handlePropCallback(props, "maxZoom", applyProps);
handlePropCallback(props, "minDistance", applyProps);
handlePropCallback(props, "maxDistance", applyProps);
handlePropCallback(props, "minPolarAngle", applyProps);
handlePropCallback(props, "maxPolarAngle", applyProps);
handlePropCallback(props, "minAzimuthAngle", applyProps);
handlePropCallback(props, "maxAzimuthAngle", applyProps);

//handleVectorProp(props, "target", three.value as unknown as Object3D);

defineExpose({ three });
</script>
