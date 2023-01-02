<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot">
          <MeshNormalMaterial />
          <BoxGeometry :width="6" :height="4" :depth="2" />
        </Mesh>
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

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>
