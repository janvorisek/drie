<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer ref="renderer" :antialias="true">
        <PerspectiveCamera :position="[3, 3, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <AmbientLight />
          <GLTFLoader
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
            :position="[0, -3, 0]"
            :scale="[100, 100, 100]"
          >
            <TransformControls
              :position="[0, 3, 0]"
              :size="PARAMS.size"
              :mode="PARAMS.mode"
              :show-x="PARAMS.showX"
              :show-y="PARAMS.showY"
              :show-z="PARAMS.showZ"
            />
          </GLTFLoader>
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
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { GLTFLoader } from "../../src";
import { TransformControls } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { AmbientLight } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive } from "vue";

const PARAMS = reactive({
  size: 1,
  mode: "translate",
  showX: true,
  showY: true,
  showZ: true,
});

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "mode", {
    options: {
      translate: "translate",
      rotate: "rotate",
      scale: "scale",
    },
  });
  pane.addInput(PARAMS, "size", { min: 0 });
  pane.addInput(PARAMS, "showX");
  pane.addInput(PARAMS, "showY");
  pane.addInput(PARAMS, "showZ");
};

defineExpose(PARAMS);
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
