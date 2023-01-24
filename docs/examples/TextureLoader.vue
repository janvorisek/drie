<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[0.1, 0, 1]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshBasicMaterial :side="DoubleSide">
              <TextureLoader
                url="https://threejs.org/examples/textures/crate.gif"
                :wrap-s="PARAMS.wrapS"
                :wrap-t="PARAMS.wrapT"
                :rotation="PARAMS.rotate"
                :repeat="[PARAMS.repeat.x, PARAMS.repeat.y]"
              />
            </MeshBasicMaterial>
            <PlaneGeometry />
          </Mesh>
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
import { DoubleSide, RepeatWrapping, ClampToEdgeWrapping } from "three";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { PlaneGeometry } from "../../src";
import { MeshBasicMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { TextureLoader } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive, ref } from "vue";

const PARAMS = reactive({
  rotate: 0,
  wrapS: RepeatWrapping,
  wrapT: RepeatWrapping,
  repeat: { x: 1, y: 1 },
});

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "rotate");

  pane.addInput(PARAMS, "wrapS", {
    options: {
      ClampToEdgeWrapping,
      RepeatWrapping,
    },
  });

  pane.addInput(PARAMS, "wrapT", {
    options: {
      ClampToEdgeWrapping,
      RepeatWrapping,
    },
  });

  pane.addInput(PARAMS, "repeat");
};
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
