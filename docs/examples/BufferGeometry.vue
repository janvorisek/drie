<template>
  <div class="example">
    <Renderer :antialias="true" :frame-limit="30">
      <PerspectiveCamera :position="[3, 3, 3]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :position="[1, 1, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <BufferGeometry name="geo" :normals="true" :vertices="vertices" />
        </Mesh>
        <LineSegments :position="[1, 1, 0]">
          <WireframeGeometry geometry="geo" />
          <LineBasicMaterial color="black" />
        </LineSegments>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { LineBasicMaterial, LineSegments, MeshNormalMaterial, Renderer, WireframeGeometry } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { BufferGeometry } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";

import { reactive } from "vue";
import { DoubleSide } from "three";

const vertices = reactive<number[]>([
  -1.0, -1.0, 2.0, 1.0, -1.0, 0.0, 1.0, 1.0, 1.0, -1.0, -1.0, 2.0, 1.0, -1.0, 0.0, 1.0, -2.0, 1.0, 1.0, 1.0, 1.0, -1.0,
  1.0, 1.0, -1.0, -1.0, 2.0,
]);
</script>
