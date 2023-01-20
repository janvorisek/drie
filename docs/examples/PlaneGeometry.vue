<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <PlaneGeometry
              name="geo"
              :width="PARAMS.width"
              :height="PARAMS.height"
              :width-segments="PARAMS.widthSegments"
              :height-segments="PARAMS.heightSegments"
            />
          </Mesh>
          <LineSegments>
            <WireframeGeometry geometry="geo" />
            <LineBasicMaterial color="black" />
          </LineSegments>
          <AxesHelper :size="3" />
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
import { PlaneGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive } from "vue";

const PARAMS = reactive({
  width: 5,
  height: 3,
  widthSegments: 1,
  heightSegments: 1,
});

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "width", {
    min: 1,
    max: 10,
  });

  pane.addInput(PARAMS, "height", {
    min: 1,
    max: 10,
  });

  pane.addInput(PARAMS, "widthSegments", {
    min: 1,
    max: 10,
    step: 1,
  });

  pane.addInput(PARAMS, "heightSegments", {
    min: 1,
    max: 10,
    step: 1,
  });
};
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
