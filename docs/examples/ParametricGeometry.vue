<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true">
        <PerspectiveCamera :position="[10, 10, 10]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh>
            <MeshNormalMaterial :side="DoubleSide" />
            <ParametricGeometry
              name="geo"
              :function="PARAMS.function"
              :slices="PARAMS.slices"
              :stacks="PARAMS.stacks"
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
import { DoubleSide, Vector3 } from 'three';

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { ParametricGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from 'v-tweakpane';
import { reactive } from 'vue';

const PARAMS = reactive({
  function: (u: number, v: number, target: Vector3) => {
    u = u-0.5
    v = v-0.5
    const x = u*u + v*v;
    const y = u
    const z = v
    target.set( 10*x, 10*y, 10*z );
  },
  slices: 8,
  stacks: 8,
});


const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, 'slices', 
    {
      min: 3,
      max: 24,
      step: 1
    }
  );
  
  pane.addInput(PARAMS, 'stacks', 
    {
      min: 3,
      max: 24,
      step: 1
    }
  );
};
</script>

<style>
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>