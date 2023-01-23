<script lang="ts">
export default {
  name: "TrackballControls",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import TrackballControls from '../../examples/TrackballControls.vue'
  </script>

  This component manages [`THREE.TrackballControls`](https://threejs.org/docs/#examples/en/controls/TrackballControls).

  `<TrackballControls>` must be passed to [`<PerspectiveCamera>`](/components/Cameras/PerspectiveCamera) or [`<OrthographicCamera>`](/components/Cameras/OrthographicCamera)

  ## Example

  <ClientOnly>
  <TrackballControls />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{5}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5,5,5]" :up="[0, 0, 1]">
          <TrackballControls :rotate-speed="0.01" :pan-speed="0.003" />
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
    import { PerspectiveCamera, TrackballControls } from "@janvorisek/drie"
    import { OBJLoader, MeshNormalMaterial } from "@janvorisek/drie";
    import { AxesHelper } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { Camera, Object3D } from "three";

import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

import { inject, ref, watch, type Ref } from "vue";
import { handlePropCallback } from "../utils";

export interface Props {
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
   * The pan speed
   */
  panSpeed?: number;

  /**
   * The rotation speed.
   */
  rotateSpeed?: number;

  /**
   * The zoom speed.
   */
  zoomSpeed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  rotateSpeed: 1,
  panSpeed: 0.3,
  zoomSpeed: 1.2,
  minDistance: 0,
  maxDistance: Infinity,
});

const three = ref<TrackballControls | null>(null);
(inject("addControls") as (c: Ref<TrackballControls | null>) => void)(three);

const camera = inject<Camera>("parentCamera") as Camera;
const canvas = inject<Ref<HTMLCanvasElement>>("canvas") as Ref<HTMLCanvasElement>;

function applyProps() {
  if (three.value == null) return;

  three.value.rotateSpeed = props.rotateSpeed;
  three.value.zoomSpeed = props.zoomSpeed;
  three.value.panSpeed = props.panSpeed;
  three.value.minDistance = props.minDistance;
  three.value.maxDistance = props.maxDistance;
}

let boundCamera = false;
const tryBindCamera = () => {
  if (!canvas.value) return;
  if (boundCamera) return;

  three.value = new TrackballControls(camera, canvas.value);

  applyProps();

  boundCamera = true;
};

watch(canvas, () => {
  tryBindCamera();
});

applyProps();

handlePropCallback(props, "panSpeed", applyProps);
handlePropCallback(props, "rotateSpeed", applyProps);
handlePropCallback(props, "zoomSpeed", applyProps);
handlePropCallback(props, "minDistance", applyProps);
handlePropCallback(props, "maxDistance", applyProps);

defineExpose({ three });
</script>
