<template>
  <div class="example-with-props">
    <div class="example">
      <Renderer :antialias="true" :on-before-render="onBeforeRender">
        <PerspectiveCamera :position="[0, 2, 3]">
          <OrbitControls />
        </PerspectiveCamera>
        <Scene background="#f9f9f9">
          <Mesh v-if="PARAMS.object === 'CircleGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <CircleGeometry name="CircleGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'CircleGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="CircleGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>
          <Mesh v-if="PARAMS.object === 'BoxGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <BoxGeometry name="BoxGeometry" />
          </Mesh>
          <LineSegments v-if="PARAMS.object === 'BoxGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <WireframeGeometry geometry="BoxGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>
          <Mesh v-if="PARAMS.object === 'ConeGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <ConeGeometry name="ConeGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'ConeGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="ConeGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>
          <Mesh v-if="PARAMS.object === 'CylinderGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <CylinderGeometry name="CylinderGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'CylinderGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="CylinderGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>

          <Mesh v-if="PARAMS.object === 'PlaneGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <PlaneGeometry name="PlaneGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'PlaneGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="PlaneGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>

          <Mesh v-if="PARAMS.object === 'RingGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <RingGeometry name="RingGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'RingGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="RingGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>

          <Mesh v-if="PARAMS.object === 'SphereGeometry'" :position="position" :rotation="rotation" :scale="scale">
            <MeshBasicMaterial :color="PARAMS.color" />
            <SphereGeometry name="SphereGeometry" />
          </Mesh>
          <LineSegments
            v-if="PARAMS.object === 'SphereGeometry'"
            :position="position"
            :rotation="rotation"
            :scale="scale"
          >
            <WireframeGeometry geometry="SphereGeometry" />
            <LineBasicMaterial color="black" />
          </LineSegments>

          <AxesHelper :size="2" />
        </Scene>
      </Renderer>
    </div>
    <div class="example-props">
      <VTweakpane :pane="{ title: 'Properties' }" @on-pane-created="onPaneCreated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Renderer } from "../../src";
import { Scene } from "../../src";
import { Mesh } from "../../src";
import {
  BoxGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  PlaneGeometry,
  RingGeometry,
  SphereGeometry,
} from "../../src";
import { MeshBasicMaterial } from "../../src";
import { PerspectiveCamera } from "../../src";
import { OrbitControls } from "../../src";
import { AxesHelper } from "../../src";
import { LineSegments, LineBasicMaterial, WireframeGeometry } from "../../src";

import { VTweakpane } from "v-tweakpane";
import { reactive, ref } from "vue";

const PARAMS = reactive({
  color: "#666666",
  object: "BoxGeometry",
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
});

const position = ref<[number, number, number]>([0, 0, 0]);
const rotation = ref<[number, number, number]>([0, 0, 0]);
const scale = ref<[number, number, number]>([1, 1, 1]);

const onBeforeRender = () => {
  position.value = [PARAMS.position.x, PARAMS.position.y, PARAMS.position.z];
  rotation.value = [PARAMS.rotation.x, PARAMS.rotation.y, PARAMS.rotation.z];
  scale.value = [PARAMS.scale.x, PARAMS.scale.y, PARAMS.scale.z];
};

const onPaneCreated = (pane: any) => {
  pane.addInput(PARAMS, "object", {
    label: "geometry",
    options: {
      BoxGeometry: "BoxGeometry",
      CircleGeometry: "CircleGeometry",
      ConeGeometry: "ConeGeometry",
      CylinderGeometry: "CylinderGeometry",
      PlaneGeometry: "PlaneGeometry",
      RingGeometry: "RingGeometry",
      SphereGeometry: "SphereGeometry",
    },
  });

  pane.addInput(PARAMS, "position");
  pane.addInput(PARAMS, "rotation");
  pane.addInput(PARAMS, "scale", { x: { min: 0 }, y: { min: 0 }, z: { min: 0 } });
};
</script>

<style>
@import "v-tweakpane/dist/v-tweakpane.css";
</style>
