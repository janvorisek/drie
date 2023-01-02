<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshLambertMaterial :color="0xeeaa55" />
          <SphereGeometry :radius="3" :width-segments="24" :height-segments="24" />
        </Mesh>
        <PointLight :position="rot" />
        <AmbientLight />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { SphereGeometry } from "../../src";
import { MeshLambertMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls, PointLight, AmbientLight } from "../../src";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [15*Math.cos(angle), 15*Math.sin(angle), 5];
}, 10);
</script>
