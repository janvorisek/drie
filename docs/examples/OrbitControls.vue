<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[5,5,5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <OBJLoader
          :position="[0, 0, -0.6]"
          :rotation="[Math.PI / 2, Math.PI, 0]"
          :scale="[20, 20, 20]"
          url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
        >
          <MeshNormalMaterial color="blue" />
        </OBJLoader>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { OBJLoader } from "../../src";
import { AxesHelper } from "../../src";
import { MeshNormalMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
</script>
