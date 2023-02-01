import type { App } from "vue";

import Renderer from "./Renderer.vue";
import Scene from "./Scene.vue";

import PerspectiveCamera from "./Cameras/PerspectiveCamera.vue";
import OrthographicCamera from "./Cameras/OrthographicCamera.vue";

import OrbitControls from "./Controls/OrbitControls.vue";
import TrackballControls from "./Controls/TrackballControls.vue";
import TransformControls from "./Controls/TransformControls.vue";

import Group from "./Objects/Group.vue";
import InstancedMesh from "./Objects/InstancedMesh.vue";
import Line from "./Objects/Line.vue";
import LineLoop from "./Objects/LineLoop.vue";
import LineSegments from "./Objects/LineSegments.vue";
import Mesh from "./Objects/Mesh.vue";
import Points from "./Objects/Points.vue";

import GLTFLoader from "./Loaders/GLTFLoader.vue";
import OBJLoader from "./Loaders/OBJLoader.vue";

import AxesHelper from "./Helpers/AxesHelper.vue";
import BoxHelper from "./Helpers/BoxHelper.vue";
import GridHelper from "./Helpers/GridHelper.vue";

import BoxGeometry from "./Geometries/BoxGeometry.vue";
import BufferGeometry from "./Geometries/BufferGeometry.vue";
import CircleGeometry from "./Geometries/CircleGeometry.vue";
import ConeGeometry from "./Geometries/ConeGeometry.vue";
import CylinderGeometry from "./Geometries/CylinderGeometry.vue";
import EdgesGeometry from "./Geometries/EdgesGeometry.vue";
import ParametricGeometry from "./Geometries/ParametricGeometry.vue";
import PlaneGeometry from "./Geometries/PlaneGeometry.vue";
import RingGeometry from "./Geometries/RingGeometry.vue";
import SphereGeometry from "./Geometries/SphereGeometry.vue";
import WireframeGeometry from "./Geometries/WireframeGeometry.vue";

import LineBasicMaterial from "./Materials/LineBasicMaterial.vue";
import LineDashedMaterial from "./Materials/LineDashedMaterial.vue";
import MeshBasicMaterial from "./Materials/MeshBasicMaterial.vue";
import MeshLambertMaterial from "./Materials/MeshLambertMaterial.vue";
import PointsMaterial from "./Materials/PointsMaterial.vue";
import MeshNormalMaterial from "./Materials/MeshNormalMaterial.vue";

import AmbientLight from "./Lights/AmbientLight.vue";
import DirectionalLight from "./Lights/DirectionalLight.vue";
import HemisphereLight from "./Lights/HemisphereLight.vue";
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
  app.component("TrackballControls", TrackballControls);
  app.component("TransformControls", TransformControls);
  // Objects
  app.component("Group", Group);
  app.component("InstancedMesh", InstancedMesh);
  // eslint-disable-next-line vue/no-reserved-component-names
  app.component("Line", Line);
  app.component("LineLoop", LineLoop);
  app.component("LineSegments", LineSegments);
  app.component("Mesh", Mesh);
  app.component("Points", Points);
  // Loaders
  app.component("GLTFLoader", GLTFLoader);
  app.component("OBJLoader", OBJLoader);
  // Helpers
  app.component("AxesHelper", AxesHelper);
  app.component("BoxHelper", BoxHelper);
  app.component("GridHelper", GridHelper);
  // Geometries
  app.component("BoxGeometry", BoxGeometry);
  app.component("BufferGeometry", BufferGeometry);
  app.component("CircleGeometry", CircleGeometry);
  app.component("ConeGeometry", ConeGeometry);
  app.component("CylinderGeometry", CylinderGeometry);
  app.component("EdgesGeometry", EdgesGeometry);
  app.component("ParametricGeometry", ParametricGeometry);
  app.component("PlaneGeometry", PlaneGeometry);
  app.component("RingGeometry", RingGeometry);
  app.component("SphereGeometry", SphereGeometry);
  app.component("WireframeGeometry", WireframeGeometry);
  // Materials
  app.component("LineBasicMaterial", LineBasicMaterial);
  app.component("LineDashedMaterial", LineDashedMaterial);
  app.component("MeshBasicMaterial", MeshBasicMaterial);
  app.component("MeshLambertMaterial", MeshLambertMaterial);
  app.component("PointsMaterial", PointsMaterial);
  app.component("MeshNormalMaterial", MeshNormalMaterial);
  // Lights
  app.component("AmbientLight", AmbientLight);
  app.component("DirectionalLight", DirectionalLight);
  app.component("HemisphereLight", HemisphereLight);
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
  TrackballControls,
  TransformControls,
  // Objects
  Group,
  InstancedMesh,
  Line,
  LineLoop,
  LineSegments,
  Mesh,
  Points,
  // Loaders
  GLTFLoader,
  OBJLoader,
  //Helpers
  AxesHelper,
  BoxHelper,
  GridHelper,
  // Geometries
  BoxGeometry,
  BufferGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  EdgesGeometry,
  ParametricGeometry,
  PlaneGeometry,
  RingGeometry,
  SphereGeometry,
  WireframeGeometry,
  // Materials
  LineBasicMaterial,
  LineDashedMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  PointsMaterial,
  MeshNormalMaterial,
  // Lights
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  // Textures
  TextureLoader,
};
