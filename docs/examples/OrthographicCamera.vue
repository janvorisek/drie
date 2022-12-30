<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <OrthographicCamera :position="[10,10,10]" :up="[0, 0, 1]">
        <OrbitControls />
      </OrthographicCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot">
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
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
import { MeshBasicMaterial } from "../../src";
import { OrthographicCamera } from "../../src";
import { OrbitControls } from "../../src";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [Math.cos(angle), 0, 0];
}, 10);
</script>