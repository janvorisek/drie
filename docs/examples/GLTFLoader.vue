<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :position="[3, 3, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <AmbientLight />
        <GLTFLoader
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
          :position="[0, -3, 0]"
          :scale="[100, 100, 100]"
        />
        <GLTFLoader
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb"
          :position="[2, -4, 0]"
          :scale="[0.1, 0.1, 0.1]"
          :rotation="[Math.PI / 2, Math.PI, 0]"
        />
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { GLTFLoader } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { AmbientLight } from "../../src";
</script>
