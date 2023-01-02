import type { App } from "vue";

import Renderer from "./Renderer.vue";
import Scene from "./Scene.vue";

import PerspectiveCamera from "./Cameras/PerspectiveCamera.vue";
import OrthographicCamera from "./Cameras/OrthographicCamera.vue";

import OrbitControls from "./Controls/OrbitControls.vue";

import LineSegments from "./Objects/LineSegments.vue";
import Mesh from "./Objects/Mesh.vue";
import Points from "./Objects/Points.vue";

import OBJLoader from "./Loaders/OBJLoader.vue";

import AxesHelper from "./Helpers/AxesHelper.vue";

import BoxGeometry from "./Geometries/BoxGeometry.vue";
import BufferGeometry from "./Geometries/BufferGeometry.vue";
import EdgesGeometry from "./Geometries/EdgesGeometry.vue";
import PlaneGeometry from "./Geometries/PlaneGeometry.vue";
import SphereGeometry from "./Geometries/SphereGeometry.vue";
import WireframeGeometry from "./Geometries/WireframeGeometry.vue";

import LineBasicMaterial from "./Materials/LineBasicMaterial.vue";
import MeshBasicMaterial from "./Materials/MeshBasicMaterial.vue";
import MeshLambertMaterial from "./Materials/MeshLambertMaterial.vue";
import PointsMaterial from "./Materials/PointsMaterial.vue";
import MeshNormalMaterial from "./Materials/MeshNormalMaterial.vue";

import AmbientLight from "./Lights/AmbientLight.vue";
import PointLight from "./Lights/PointLight.vue";

import TextureLoader from "./Textures/TextureLoader.vue";

function install(app: App) {
  // Base entities
  app.component("Renderer", Renderer);
  app.component("Scene", Scene);
  // Cameras
  app.component("PerspectiveCamera", PerspectiveCamera);
  app.component("OrthographicCamera", OrthographicCamera);
  // Controls
  app.component("OrbitControls", OrbitControls);
  // Objects
  app.component("LineSegments", LineSegments);
  app.component("Mesh", Mesh);
  app.component("Points", Points);
  // Loaders
  app.component("OBJLoader", OBJLoader);
  // Helpers
  app.component("AxesHelper", AxesHelper);
  // Geometries
  app.component("BoxGeometry", BoxGeometry);
  app.component("BufferGeometry", BufferGeometry);
  app.component("EdgesGeometry", EdgesGeometry);
  app.component("PlaneGeometry", PlaneGeometry);
  app.component("SphereGeometry", SphereGeometry);
  app.component("WireframeGeometry", WireframeGeometry);
  // Materials
  app.component("LineBasicMaterial", LineBasicMaterial);
  app.component("MeshBasicMaterial", MeshBasicMaterial);
  app.component("MeshLambertMaterial", MeshLambertMaterial);
  app.component("PointsMaterial", PointsMaterial);
  app.component("MeshNormalMaterial", MeshNormalMaterial);
  // Lights
  app.component("AmbientLight", AmbientLight);
  app.component("PointLight", PointLight);
  // Textures
  app.component("TextureLoader", TextureLoader);
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
  LineSegments,
  Mesh,
  Points,
  // Loaders
  OBJLoader,
  //Helpers
  AxesHelper,
  // Geometries
  BoxGeometry,
  BufferGeometry,
  EdgesGeometry,
  PlaneGeometry,
  SphereGeometry,
  WireframeGeometry,
  // Materials
  LineBasicMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  PointsMaterial,
  MeshNormalMaterial,
  // Lights
  AmbientLight,
  PointLight,
  // Textures
  TextureLoader,
};
