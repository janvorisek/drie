import type { App } from "vue";

import Renderer from "./Renderer.vue";
import Scene from "./Scene.vue";

import PerspectiveCamera from "./Cameras/PerspectiveCamera.vue";
import OrthographicCamera from "./Cameras/OrthographicCamera.vue";

import OrbitControls from "./Controls/OrbitControls.vue";

import Mesh from "./Objects/Mesh.vue";
import Points from "./Objects/Points.vue";

import OBJLoader from "./Loaders/OBJLoader.vue";

import AxesHelper from "./Helpers/AxesHelper.vue";

import BoxGeometry from "./Geometries/BoxGeometry.vue";
import BufferGeometry from "./Geometries/BufferGeometry.vue";
import PlaneGeometry from "./Geometries/PlaneGeometry.vue";
import SphereGeometry from "./Geometries/SphereGeometry.vue";

import MeshBasicMaterial from "./Materials/MeshBasicMaterial.vue";
import MeshLambertMaterial from "./Materials/MeshLambertMaterial.vue";
import PointsMaterial from "./Materials/PointsMaterial.vue";
import MeshNormalMaterial from "./Materials/MeshNormalMaterial.vue";

import AmbientLight from "./Lights/AmbientLight.vue";
import PointLight from "./Lights/PointLight.vue";

import Texture from "./Textures/Texture.vue";

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
  app.component("Mesh", Mesh);
  app.component("Points", Points);
  // Loaders
  app.component("OBJLoader", OBJLoader);
  // Helpers
  app.component("AxesHelper", AxesHelper);
  // Geometries
  app.component("BoxGeometry", BoxGeometry);
  app.component("BufferGeometry", BufferGeometry);
  app.component("PlaneGeometry", PlaneGeometry);
  app.component("SphereGeometry", SphereGeometry);
  // Materials
  app.component("MeshBasicMaterial", MeshBasicMaterial);
  app.component("MeshLambertMaterial", MeshLambertMaterial);
  app.component("PointsMaterial", PointsMaterial);
  app.component("MeshNormalMaterial", MeshNormalMaterial);
  // Lights
  app.component("AmbientLight", AmbientLight);
  app.component("PointLight", PointLight);
  // Textures
  app.component("Texture", Texture);
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
  // Loaders
  OBJLoader,
  //Helpers
  AxesHelper,
  // Geometries
  BoxGeometry,
  BufferGeometry,
  PlaneGeometry,
  SphereGeometry,
  // Materials
  MeshBasicMaterial,
  MeshLambertMaterial,
  PointsMaterial,
  MeshNormalMaterial,
  // Lights
  AmbientLight,
  PointLight,
  // Textures
  Texture,
};
