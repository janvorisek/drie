<template>
  <div class="example">
    <Renderer ref="renderer" :camera="camera" :antialias="true">
      <PerspectiveCamera name="cam1" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <OrthographicCamera name="cam2">
        <OrbitControls />
      </OrthographicCamera>
      <Scene background="#f9f9f9">
        <Points :position="posV">
          <PointsMaterial :color="color" :size-attenuation="false" :size="4" />
          <SphereGeometry :radius="radius" :width-segments="12" :height-segments="12" />
        </Points>
        <Mesh :position="pos" :rotation="rot">
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="w + 1" :height="w * 2 + 1" />
        </Mesh>
        <Mesh :position="[-5, 0, 0]" :scale="[s, 1, 1]">
          <MeshBasicMaterial :color="color2" :side="DoubleSide" />
          <BufferGeometry :vertices="vertices" />
        </Mesh>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import { Points } from "../../src";
import { BoxGeometry } from "../../src";
import { BufferGeometry } from "../../src";
import { SphereGeometry } from "../../src";
import { MeshBasicMaterial } from "../../src";
import { PointsMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrthographicCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";

import { ref, onMounted } from "vue";
import { DoubleSide, Vector3 } from "three";

const pos = ref<[number, number, number]>([0, 0, 0]);
const rot = ref<[number, number, number]>([0, 0, 0]);
const vertices = ref<[number, number, number][]>([]);

const w = ref(1);
const s = ref(1);
const radius = ref(1);

const posV = new Vector3(5, -1, 0);
const color = ref("rgb(255,0,0)");
const color2 = ref("rgb(255,0,0)");

onMounted(() => {
  let segs = 24;
  let r1 = 2;
  let r2 = 1;
  for (let i = 0; i < segs; i++) {
    const x1 = r1 * Math.cos(((2 * Math.PI) / segs) * i);
    const y1 = r2 * Math.sin(((2 * Math.PI) / segs) * i);
    const x2 = r1 * Math.cos(((2 * Math.PI) / segs) * (i + 1));
    const y2 = r2 * Math.sin(((2 * Math.PI) / segs) * (i + 1));

    vertices.value.push([x1, y1, 0]);
    vertices.value.push([x2, y2, 0]);
    vertices.value.push([0, 0, 0]);
  }
});

window.setInterval(() => {
  const angle = Date.now() / 1000;

  color.value = `rgb(${Math.round(Math.cos(angle) * 50 + 100)}, ${Math.round(
    ((Math.sin(angle) + 1) / 2) * 200 + 50,
  )}, 100)`;

  color2.value = `rgb(${Math.round(Math.cos(angle) * 50 + 200)}, ${Math.round(Math.sin(angle) * 50 + 100)}, 50)`;
  radius.value = Math.cos(angle) + 2;
  s.value = Math.sin(angle * 5) * 0.5 + 1;

  w.value = Math.sin(angle) + 1;
  pos.value = [Math.cos(angle), Math.sin(angle), Math.sin(angle)];
  rot.value = [Math.cos(angle) * Math.PI, 0, 0];
}, 10);

const camera = ref("cam1");
const renderer = ref({});
</script>