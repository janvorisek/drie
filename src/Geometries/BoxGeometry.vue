<script lang="ts">
export default {
  name: "BoxGeometry",
  render: () => null,
};
</script>

<docs>BEGIN_DOCS
  <script setup>
  import BoxGeometry from '../../examples/BoxGeometry.vue'
  </script>

  BoxGeometry is a component for a rectangular cuboid with a given `width`, `height`, and `depth`. The cuboid is centred on the origin, with each edge parallel to one of the axes.

  Any modifications to the `width`, `height`, `depth`, `widthSegments`, `heightSegments` and `depthSegments` properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

  ## Example

  <ClientOnly>
  <BoxGeometry />
  </ClientOnly>

  ::: details Click me to view the example code
  ```vue{10}
  <template>
    <div style="width: 100vh; height: 100vh;">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial />
            <BoxGeometry :width="6" :height="4" :depth="2" />
          </Mesh>
        </Scene>
      </Renderer>
    </div>
  </template>

  <script setup lang="ts">
    import { Renderer, Scene } from "@janvorisek/drie";
    import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"
    import { Mesh, BoxGeometry, MeshNormalMaterial } from "@janvorisek/drie";
  </script>
  ```
  :::
</docs>

<script setup lang="ts">
import { inject, reactive } from "vue";

import { BoxGeometry, BufferGeometry, Mesh } from "three";
import { handlePropCallback, copyGeo } from "../utils";

export interface Props {
  /**
   * Name of the geometry
   */
  name?: string;

  /**
   * Width along the X axis
   */
  width?: number;

  /**
   * Height along the Y axis
   */
  height?: number;

  /**
   * Depth along the Z axis
   */
  depth?: number;

  /**
   * Number of segments along the X axis.
   */
  widthSegments?: number;

  /**
   * Number of segments along the Y axis.
   */

  heightSegments?: number;
  /**
   * Number of segments along the Z axis.
   */
  depthSegments?: number;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
});

const mesh = inject("mesh") as Mesh;

function makeBox(
  width: number | undefined,
  height: number | undefined,
  depth: number | undefined,
  widthSegments: number | undefined,
  heightSegments: number | undefined,
  depthSegments: number | undefined,
) {
  return new BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
}

const three = reactive(new BufferGeometry());
// eslint-disable-next-line vue/no-setup-props-destructure
three.name = props.name;
mesh.geometry = three;

const addGeometry = inject("addGeometry") as (g: BufferGeometry) => void;
addGeometry(three);

function redoGeometry() {
  const tmp = makeBox(
    props.width,
    props.height,
    props.depth,
    props.widthSegments,
    props.heightSegments,
    props.depthSegments,
  );

  copyGeo(three, tmp);
}

redoGeometry();

handlePropCallback(props, "name", () => {
  three.name = props.name;
});

handlePropCallback(props, "width", redoGeometry);
handlePropCallback(props, "height", redoGeometry);
handlePropCallback(props, "depth", redoGeometry);
handlePropCallback(props, "widthSegments", redoGeometry);
handlePropCallback(props, "heightSegments", redoGeometry);
handlePropCallback(props, "depthSegments", redoGeometry);

defineExpose({ three });
</script>
