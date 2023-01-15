<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh :rotation="[Math.PI/2, 0, 0]">
          <MeshNormalMaterial :color="0xeeaa55" />
          <SphereGeometry name="geo" :radius="3" :width-segments="12" :height-segments="12" />
        </Mesh>
        <LineSegments :rotation="[Math.PI/2, 0, 0]">
          <WireframeGeometry geometry="geo" />
          <LineBasicMaterial color="black" />
        </LineSegments>
        <AxesHelper :size="5" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { SphereGeometry } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";
</script>
