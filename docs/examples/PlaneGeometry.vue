<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshNormalMaterial :side="DoubleSide" />
          <PlaneGeometry name="geo" :width="8" :height="6" :width-segments="3" :height-segments="3" />
        </Mesh>
        <LineSegments>
          <WireframeGeometry geometry="geo" />
          <LineBasicMaterial color="black" />
        </LineSegments>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { DoubleSide } from "three";

import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { PlaneGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";
</script>
