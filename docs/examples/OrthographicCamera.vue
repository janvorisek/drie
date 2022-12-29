<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <OrthographicCamera :up="[0, 0, 1]">
        <OrbitControls />
      </OrthographicCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { BoxGeometry } from "../../src";
import { MeshBasicMaterial } from "../../src";
import { OrthographicCamera } from "../../src";
import { OrbitControls } from "../../src";
</script>