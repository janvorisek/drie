<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[1.5, 1.5, 1]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshBasicMaterial :transparent="true" :opacity="0" />
            <BoxGeometry name="geo" />
          </Mesh>
          <LineSegments>
            <WireframeGeometry geometry="geo" />
            <LineBasicMaterial :color="PARAMS.color" :transparent="PARAMS.transparent" :opacity="PARAMS.opacity" />
          </LineSegments>
          <AxesHelper :size="1" />
        </Scene>
      </Renderer>
    </div>
    <div class="example-props">
      <VTweakpane :pane="{ title: 'Properties' }" @on-pane-created="onPaneCreated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { BoxGeometry } from "../../src";
import { MeshBasicMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive } from "vue";

const PARAMS = reactive({
  color: "#000000",
  transparent: false,
  opacity: 1,
});

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "color");
  pane.addInput(PARAMS, "transparent");
  pane.addInput(PARAMS, "opacity", {
    min: 0,
    max: 1,
  });
};

defineExpose(PARAMS);
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
