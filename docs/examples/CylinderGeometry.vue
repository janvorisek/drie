<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer ref="renderer" :antialias="true">
        <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <CylinderGeometry
              name="geo"
              :radius-top="PARAMS.radiusTop"
              :radius-bottom="PARAMS.radiusBottom"
              :height="PARAMS.height"
              :radial-segments="PARAMS.radialSegments"
              :height-segments="PARAMS.heightSegments"
              :open-ended="PARAMS.openEnded"
              :theta-start="PARAMS.thetaStart"
              :theta-length="PARAMS.thetaLength"
            />
          </Mesh>
          <LineSegments>
            <WireframeGeometry geometry="geo" />
            <LineBasicMaterial color="black" />
          </LineSegments>
          <AxesHelper :size="4" />
        </Scene>
      </Renderer>
    </div>
    <div class="example-props">
      <VTweakpane :pane="{ title: 'Properties' }" @on-pane-created="onPaneCreated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { CylinderGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive } from "vue";

const PARAMS = reactive({
  radiusTop: 1,
  radiusBottom: 1,
  height: 4,
  radialSegments: 24,
  heightSegments: 1,
  openEnded: false,
  thetaStart: 0,
  thetaLength: 2 * Math.PI,
});

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "radiusTop", {
    min: 1,
    max: 5,
  });

  pane.addInput(PARAMS, "radiusBottom", {
    min: 1,
    max: 5,
  });

  pane.addInput(PARAMS, "height", {
    min: 1,
    max: 10,
  });

  pane.addInput(PARAMS, "radialSegments", {
    min: 3,
    max: 64,
    step: 1,
  });

  pane.addInput(PARAMS, "heightSegments", {
    min: 1,
    max: 20,
    step: 1,
  });

  pane.addInput(PARAMS, "openEnded", {});

  pane.addInput(PARAMS, "thetaStart", {
    min: 0,
    max: 2 * Math.PI,
  });

  pane.addInput(PARAMS, "thetaLength", {
    min: 0,
    max: 2 * Math.PI,
  });
};
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
