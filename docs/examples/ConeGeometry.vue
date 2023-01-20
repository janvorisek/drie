<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[6, 6, 3]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="[Math.PI / 2, 0, 0]">
          <MeshNormalMaterial :side="DoubleSide" />
          <ConeGeometry name="geo" :radius="4" :height="5" />
        </Mesh>
        <LineSegments :rotation="[Math.PI / 2, 0, 0]">
          <WireframeGeometry geometry="geo" />
          <LineBasicMaterial color="black" />
        </LineSegments>
        <AxesHelper :size="5" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { ConeGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";
</script>
