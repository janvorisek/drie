<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[12, 12, 10]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Points>
            <PointsMaterial
              :color="PARAMS.color"
              :size="PARAMS.size"
              :size-attenuation="PARAMS.sizeAttenuation"
            />
            <BoxGeometry
              name="geo"
              :width="10"
              :height="10"
              :depth="10"
            />
          </Points>
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
import { Points } from "../../src";
import { BoxGeometry } from "../../src";
import { PointsMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";

import { VTweakpane } from 'v-tweakpane';
import { reactive } from 'vue';

const PARAMS = reactive({
  color: '#000000',
  size: 2,
  sizeAttenuation: true
});


const onPaneCreated = (pane: any) => {
    pane.addInput(PARAMS, 'color');
    pane.addInput(PARAMS, 'size', {min: 1, max: 10});
    pane.addInput(PARAMS, 'sizeAttenuation');
};
</script>

<style>
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>