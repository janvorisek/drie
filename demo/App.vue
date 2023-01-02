<template>
  <select v-model="camera" class="my-5">
    <option value="cam1">PerspectiveCamera</option>
    <option value="cam2">OrthographicCamera</option>
  </select>
  <select v-model="geoName" class="my-5">
    <option value="plane">Plane</option>
    <option value="test">Cube</option>
    <option value="custom">Custom</option>
    <option value="sphere">Sphere</option>
  </select>
  <div class="rendererParent">
    <Renderer ref="renderer" :camera="camera" :antialias="true" :shadow-map-enabled="true">
      <PerspectiveCamera name="cam1" :position="[5, 5, 5]" :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <OrthographicCamera name="cam2" :position="[5, 5, 5]">
        <OrbitControls />
      </OrthographicCamera>
      <Scene background="white">
        <PointLight :position="[0, 0, 10]" :intensity="0.25" :cast-shadow="true" />
        <AmbientLight :color="0xffffff" />
        <Points :position="posV" :scale="[s, s, s]">
          <PointsMaterial :color="color" :size-attenuation="false" :size="4" />
          <SphereGeometry name="sphere" :radius="radius" :width-segments="12" :height-segments="12" />
        </Points>
        <Mesh :position="pos" :rotation="rot" :cast-shadow="true">
          <MeshLambertMaterial transparent :opacity="opacity">
            <TextureLoader url="https://threejs.org/examples/textures/crate.gif" />
          </MeshLambertMaterial>
          <BoxGeometry name="test" :width="w + 1" :height="w * 2 + 1" />
        </Mesh>
        <Mesh :position="[-5, 0, 0]" :scale="[s, 1, 1]">
          <MeshLambertMaterial :color="color2" :side="DoubleSide" />
          <BufferGeometry name="custom" :vertices="vertices" />
        </Mesh>
        <Mesh :position="[0, 0, -3]" :receive-shadow="true">
          <MeshLambertMaterial color="#cccccc" :side="DoubleSide" />
          <PlaneGeometry name="plane" :width="20" :height="20" />
        </Mesh>
        <LineSegments :position="pos" :rotation="rot">
          <EdgesGeometry geometry="test" />
        </LineSegments>
        <LineSegments>
          <WireframeGeometry :geometry="geoName" />
        </LineSegments>
        <OBJLoader
          :position="[3, 0, 0]"
          :rotation="[Math.PI / 2, Math.cos(Date.now() / 1000) * Math.PI, 0]"
          :scale="[20, 20, 20]"
          url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
          @load="onLoad"
        >
          <MeshBasicMaterial :color="color3" :side="DoubleSide" />
        </OBJLoader>
        <OBJLoader
          :position="[-2, 2, 0]"
          :rotation="[Math.PI / 2, 0, 0]"
          :scale="[10, 10, 10]"
          url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
        >
          <MeshNormalMaterial :side="DoubleSide" transparent :opacity="0.5" />
        </OBJLoader>
        <AxesHelper :size="3" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { DoubleSide, Vector3 } from "three";

const pos = ref<[number, number, number]>([0, 0, 0]);
const rot = ref<[number, number, number]>([0, 0, 0]);
const vertices = reactive<number[]>([]);

const w = ref(1);
const s = ref(1);
const radius = ref(1);

const opacity = ref(1);

const posV = new Vector3(5, -1, 0);
const color = ref("rgb(255,0,0)");
const color2 = ref("rgb(255,0,0)");
const color3 = ref("rgb(255,0,0)");

onMounted(() => {
  let segs = 24;
  let r1 = 2;
  let r2 = 1;

  for (let i = 0; i < segs; i++) {
    const x1 = r1 * Math.cos(((2 * Math.PI) / segs) * i);
    const y1 = r2 * Math.sin(((2 * Math.PI) / segs) * i);
    const x2 = r1 * Math.cos(((2 * Math.PI) / segs) * (i + 1));
    const y2 = r2 * Math.sin(((2 * Math.PI) / segs) * (i + 1));

    vertices.push(x1, y1, 0);
    vertices.push(x2, y2, 0);
    vertices.push(0, 0, 0);
  }
});

window.setInterval(() => {
  const angle = Date.now() / 1000;

  opacity.value = Math.sin(2 * angle) * 0.45 + 0.5;

  color.value = `rgb(${Math.round(Math.cos(angle) * 50 + 100)}, ${Math.round(
    ((Math.sin(angle) + 1) / 2) * 200 + 50,
  )}, 100)`;

  color2.value = `rgb(${Math.round(Math.cos(angle) * 50 + 200)}, ${Math.round(Math.sin(angle) * 50 + 100)}, 50)`;
  color3.value = `rgb(${Math.round(Math.cos(angle * 2) * 100 + 100)}, 50, ${Math.round(Math.sin(angle) * 50 + 100)})`;
  radius.value = Math.cos(angle) + 2;
  s.value = Math.sin(angle * 5) * 0.5 + 1;

  w.value = Math.sin(angle) + 1;
  pos.value = [Math.cos(angle), Math.sin(angle), Math.sin(angle)];
  rot.value = [Math.cos(angle) * Math.PI, 0, 0];
}, 10);

const onLoad = () => {
  console.log("obj load event");
};

const camera = ref("cam1");
const renderer = ref({});

const geoName = ref("plane");
</script>

<style>
.rendererParent {
  width: 100%;
  height: 580px;
  border: 1px solid black;
}
</style>
