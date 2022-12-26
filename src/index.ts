import type { App } from "vue";
import MyComponent from "./MyComponent.vue";

import Renderer from "./Renderer.vue";
import Scene from "./Scene.vue";

import PerspectiveCamera from "./Cameras/PerspectiveCamera.vue";
import OrthographicCamera from "./Cameras/OrthographicCamera.vue";

import OrbitControls from "./Controls/OrbitControls.vue";

import Mesh from "./Objects/Mesh.vue";
import Points from "./Objects/Points.vue";

import AxesHelper from "./Helpers/AxesHelper.vue";

import BoxGeometry from "./Geometries/BoxGeometry.vue";
import BufferGeometry from "./Geometries/BufferGeometry.vue";
import SphereGeometry from "./Geometries/SphereGeometry.vue";

import MeshBasicMaterial from "./Materials/MeshBasicMaterial.vue";
import PointsMaterial from "./Materials/PointsMaterial.vue";

function install(app: App) {
  app.component("MyComponent", MyComponent);
}

export {
  install,
  // Base entities
  Renderer,
  Scene,
  // Cameras
  PerspectiveCamera,
  OrthographicCamera,
  // Controls
  OrbitControls,
  // Objects
  Mesh,
  Points,
  //Helpers
  AxesHelper,
  // Geometries
  BoxGeometry,
  BufferGeometry,
  SphereGeometry,
  // Materials
  MeshBasicMaterial,
  PointsMaterial,
};
