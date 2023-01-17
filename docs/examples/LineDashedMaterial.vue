<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[0.1, 0, 2]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshBasicMaterial
              :transparent="true"
              :opacity="0"
            />
            <CircleGeometry
              name="geo"
              :radius="1"
            />
          </Mesh>
          <LineSegments>
            <EdgesGeometry geometry="geo" />
            <LineDashedMaterial
              :color="PARAMS.color"
              :scale="PARAMS.scale"
              :dash-size="PARAMS.dashSize"
              :gap-size="PARAMS.gapSize" />
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
import { CircleGeometry } from "../../src";
import { MeshBasicMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineDashedMaterial, EdgesGeometry } from "../../src";

import { VTweakpane } from 'v-tweakpane';
import { reactive } from 'vue';

const PARAMS = reactive({
  color: '#000000',
  scale: 1,
  dashSize: 0.25,
  gapSize: 0.1
});


const onPaneCreated = (pane: any) => {
    pane.addInput(PARAMS, 'color');
    pane.addInput(PARAMS, 'scale' , { min: 0.1, max: 2 });
    pane.addInput(PARAMS, 'dashSize', { min: 0.01, max: 1 });
    pane.addInput(PARAMS, 'gapSize', { min: 0.01, max: 1 });
};
</script>

<style>
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>