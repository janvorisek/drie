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
            <CircleGeometry name="geo" :radius="PARAMS.radius" :segments="PARAMS.segments" :thetaStart="PARAMS.thetaStart" :thetaLength="PARAMS.thetaLength" />
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
import { CircleGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from 'v-tweakpane';
import { reactive } from 'vue';

const PARAMS = reactive({
  radius: 3,
  segments: 32,
  thetaStart: 0,
  thetaLength: 2*Math.PI,
});

const onPaneCreated = (pane: any) => {
        pane.addInput(PARAMS, 'radius', 
          {
            min: 1,
            max: 10
          }
        );
        
        pane.addInput(PARAMS, 'segments', 
          {
            min: 3,
            max: 64,
            step: 1
          }
        );

        pane.addInput(PARAMS, 'thetaStart', 
          {
            min: 0,
            max: 2*Math.PI
          }
        );

        pane.addInput(PARAMS, 'thetaLength', 
          {
            min: 0,
            max: 2*Math.PI,
          }
        );
      };
</script>

<style>
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>