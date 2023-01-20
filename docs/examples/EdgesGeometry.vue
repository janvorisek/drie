<template>
  <div class="example">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot">
          <MeshNormalMaterial :transparent="true" :opacity="0.5" />
          <BoxGeometry name="box" :width="6" :height="4" :depth="2" />
        </Mesh>
        <LineSegments :rotation="rot">
          <EdgesGeometry geometry="box" />
          <LineBasicMaterial color="black" />
        </LineSegments>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { BoxGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { EdgesGeometry, LineBasicMaterial, LineSegments } from "../../src";
import { AxesHelper } from "../../src";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>
