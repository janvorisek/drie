<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[25,10,10]" :up="[0, 0, 1]">
        <OrbitControls :target="[25,0,0]" />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="rot" :position="[i*7.5,0,0]" v-for="i in 6">
          <MeshBasicMaterial color="#aaa" />
          <BoxGeometry :name="`cube${i}`" :width="5" :height="5" :depth="2" />
        </Mesh>
        <LineSegments :rotation="rot" :position="[i*7.5,0,0]" v-for="i in 6">
          <EdgesGeometry :geometry="`cube${i}`" />
          <LineBasicMaterial color="#333" />
        </LineSegments>
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
import { PerspectiveCamera } from "../../src";
import { OrbitControls, EdgesGeometry, LineBasicMaterial, LineSegments } from "../../src";

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
  const angle = Date.now() / 1000;
  rot.value = [0, 0, Math.cos(angle)];
}, 10);
</script>
