<template>
  <div class="example-with-props">
    <div class="example" style="width: 50vh; height: 50vh">
      <Renderer ref="renderer" :antialias="true" auto-resize="true">
        <OrthographicCamera ref="camera" :position="[0, -20, 0]" :up="[0, 1, 0]" :far="200000">
          <TrackballControls :rotate-speed="0.01" :pan-speed="0.01" />
        </OrthographicCamera>
        <Scene ref="scene">
          <PointLight ref="light" />
          <Group>
            <GLTFLoader url="/test-mesh/" enable-raycasting @load="onCreation" @click="onClick"> </GLTFLoader>
          </Group>
        </Scene>
      </Renderer>
    </div>
  </div>
</template>

<script>
import { Renderer } from "@janvorisek/drie";
import { Scene } from "@janvorisek/drie";
import { GLTFLoader } from "@janvorisek/drie";
import { OrthographicCamera } from "@janvorisek/drie";
import { TrackballControls } from "@janvorisek/drie";
import { PointLight } from "@janvorisek/drie";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddMesh",
  components: {
    Renderer,
    Scene,
    GLTFLoader,
    //TransformControls,
    OrthographicCamera,
    TrackballControls,
    PointLight,
  },
  props: {
    firstNode: {
      type: String,
      default: "node_name",
    },
  },
  data() {},
  mounted() {
    this.light = this.$refs.light.three;
    this.scene = this.$refs.scene.three;
    this.camera = this.$refs.camera.three;
    this.renderer = this.$refs.renderer.three;

    window["light"] = this.light;
    window["intersects"] = this.intersects;
    window["scene"] = this.scene;
  },
  created() {
    window.setInterval(() => {
      this.light.position.set(
        this.camera.position.x - this.LIGHT_PARAMS.distCamX,
        this.camera.position.y - this.LIGHT_PARAMS.distCamX,
        this.camera.position.z - this.LIGHT_PARAMS.distCamX,
      );
    }, 10);
  },
  methods: {
    onCreation(group) {
      this.mesh = group.getObjectByName(this.firstNode);
      this.group = group;
    },
    onClick(is) {
      console.log(is);
    },
    onMouseMove(is) {
      console.log(is); // Do whatever you need to with is
    },

    /**
     * is contains objects entered by the mouse
     */
    onMouseEnter(is) {
      console.log(is); // Do whatever you need to with is
    },

    /**
     * is contains objects left by the mouse
     */
    onMouseLeave(is) {
      console.log(is); // Do whatever you need to with is
    },
  },
});
</script>

<style></style>
