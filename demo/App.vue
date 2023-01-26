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
  <input v-model.number="count" type="number" />
  <div style="display: flex; flex-direction: row">
    <div style="width: 300px">
      <pre>{{ renderer?.three.info }}</pre>
    </div>
    <div class="rendererParent">
      <Renderer
        ref="renderer"
        :on-before-render="onBeforeRender"
        :camera="camera"
        :antialias="true"
        :shadow-map-enabled="true"
      >
        <PerspectiveCamera name="cam1" :position="[5, 5, 5]" :up="[0, 0, 1]">
          <OrbitControls />
        </PerspectiveCamera>
        <OrthographicCamera name="cam2" :position="[50, 50, 50]" :up="[1, 0, 0]">
          <TrackballControls :rotate-speed="3" :pan-speed="1" />
        </OrthographicCamera>

        <BufferGeometry name="reusedGeo" :vertices="[0, 0, 0, 1, 0, 0, 1, 1, 0]" :faces="[0, 1, 2]" />
        <MeshBasicMaterial name="reusedMat" color="#aaa" />

        <BoxGeometry name="reusedGeo2" />
        <MeshBasicMaterial name="reusedMat2" color="#770000" />

        <Scene background="white">
          <Mesh :position="[0, 0, -3]" :receive-shadow="true">
            <MeshLambertMaterial color="#555" :side="DoubleSide" />
            <PlaneGeometry name="plane" :width="20" :height="20" />
            <TransformControls :size="0.5" />
          </Mesh>
          <PointLight :position="[0, 0, 10]" :intensity="0.25" :cast-shadow="true" />
          <AmbientLight :color="0xffffff" :intensity="2" />
          <Points :position="posV" :scale="[s, s, s]">
            <PointsMaterial :color="color" :size-attenuation="false" :size="4" />
            <SphereGeometry name="sphere" :radius="radius" :width-segments="12" :height-segments="12" />
          </Points>
          <Mesh :position="posBoxHelper">
            <MeshBasicMaterial color="black" />
            <BoxGeometry :width="0.1" :height="0.1" :depth="0.1" />
          </Mesh>
          <Group
            :enable-raycasting="true"
            :on-click="onClick"
            :on-mouse-move="onMouseEnter"
            :on-mouse-enter="onMouseEnter"
            :on-mouse-leave="onMouseLeave"
          >
            <TransformControls :size="0.5" :position="[20, 20, 0]" />
            <Mesh :position="pos" :rotation="rot" :cast-shadow="true">
              <MeshLambertMaterial transparent :opacity="opacity">
                <TextureLoader url="https://threejs.org/examples/textures/crate.gif" />
              </MeshLambertMaterial>
              <BoxGeometry name="test" :width="w + 1" :height="w * 2 + 1" />
            </Mesh>
            <Mesh :position="[-5, 0, 0]" :scale="[s, 1, 1]" :cast-shadow="true">
              <MeshLambertMaterial :color="color2" :side="DoubleSide" />
              <BufferGeometry name="custom" :vertices="vertices" />
            </Mesh>

            <OBJLoader
              :position="[3, 0, 0]"
              :scale="[20, 20, 20]"
              url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
              :cast-shadow="true"
              enable-raycasting
              :on-click="gltfClick"
              @load="onLoad"
            >
              <MeshBasicMaterial :color="color3" :side="DoubleSide" />
            </OBJLoader>
            <OBJLoader
              :position="[-2, 2, 0]"
              :rotation="[Math.PI / 2, 0, 0]"
              :scale="[10, 10, 10]"
              :cast-shadow="true"
              url="https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"
              enable-raycasting
              :on-click="gltfClick"
              @load="onLoad"
            >
              <TransformControls :size="0.5" />
              <MeshNormalMaterial :side="DoubleSide" transparent :opacity="0.5" />
            </OBJLoader>
            <GLTFLoader
              url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
              :position="[0, 0, 5]"
              :scale="[10, 10, 10]"
              :cast-shadow="true"
              enable-raycasting
              :on-click="gltfClick"
            >
              <TransformControls :size="0.5" />
            </GLTFLoader>
            <Mesh v-for="i in count" :key="i" geometry="reusedGeo" material="reusedMat" :position="[i * 1.5, 0, 0]">
            </Mesh>

            <InstancedMesh ref="instancedMesh" geometry="reusedGeo2" material="reusedMat2" :count="step * step" />
          </Group>
          <LineSegments :position="pos" :rotation="rot">
            <EdgesGeometry geometry="test" />
          </LineSegments>
          <LineSegments>
            <WireframeGeometry :geometry="geoName" />
          </LineSegments>
          <AxesHelper :size="3" />
        </Scene>
      </Renderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { Object3D } from "three";
import {
  DoubleSide,
  Mesh as TMesh,
  Vector3,
  Vector2,
  MeshBasicMaterial as TMeshBasicMaterial,
  BufferGeometry as TBufferGeometry,
  Intersection,
  Color,
} from "three";

const step = 20;
const count = ref(100);
const pos = ref<[number, number, number]>([0, 0, 0]);
const rot = ref<[number, number, number]>([0, 0, 0]);
const vertices = reactive<number[]>([]);

const w = ref(1);
const s = ref(1);
const radius = ref(1);

const opacity = ref(1);

const posV = new Vector3(5, -1, 0);
const posBoxHelper = ref<[number, number, number]>([0, 0, 0]);
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

  // Now set position
  var dummy = new Object3D();
  for (var i = 0; i < step; i++) {
    for (var j = 0; j < step; j++) {
      // Iterate and offset x pos

      dummy.position.copy(new Vector3(i * 2, j * 2, 0));
      dummy.updateMatrix();
      instancedMesh.value.three.setMatrixAt(i * step + j, dummy.matrix);
      instancedMesh.value.three.instanceMatrix.needsUpdate = true;
    }
  }
});

const onBeforeRender = () => {
  return;
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
};

const gltfClick = () => {
  console.log("gltf click");
};

const onLoad = () => {
  console.log("obj load event");
};

const onClick = (m: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[], p: Vector2) => {
  console.log("click");
  //console.log(m);
};

const onMouseEnter = (m: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[], p: Vector2) => {
  m[0].object.material.color = new Color("red");
  const pt = m[0].point;
  posBoxHelper.value = [pt.x, pt.y, pt.z];
  console.log("enter");
  //console.log({ m, p });
};

const onMouseLeave = (m: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[], p: Vector2) => {
  m[0].object.material.color = new Color("#aaa");
  console.log("leave");
  //console.log({ m, p });
};

const camera = ref("cam2");
const renderer = ref();

const geoName = ref("plane");
const instancedMesh = ref("");
</script>

<style lang="scss">
.rendererParent {
  width: calc(100vw - 300px);
  height: 580px;
  border: 1px solid black;
}
</style>
