import type { App } from "vue";
import Renderer from "./Renderer";
import Scene from "./Scene";
import PerspectiveCamera from "./Cameras/PerspectiveCamera";
import OrthographicCamera from "./Cameras/OrthographicCamera";
import OrbitControls from "./Controls/OrbitControls";
import Mesh from "./Objects/Mesh";
import Points from "./Objects/Points";
import OBJLoader from "./Loaders/OBJLoader";
import AxesHelper from "./Helpers/AxesHelper";
import BoxGeometry from "./Geometries/BoxGeometry";
import BufferGeometry from "./Geometries/BufferGeometry";
import PlaneGeometry from "./Geometries/PlaneGeometry";
import SphereGeometry from "./Geometries/SphereGeometry";
import MeshBasicMaterial from "./Materials/MeshBasicMaterial";
import MeshLambertMaterial from "./Materials/MeshLambertMaterial";
import PointsMaterial from "./Materials/PointsMaterial";
import MeshNormalMaterial from "./Materials/MeshNormalMaterial";
import AmbientLight from "./Lights/AmbientLight";
import PointLight from "./Lights/PointLight";
import TextureLoader from "./Textures/TextureLoader";
declare function install(app: App): void;
export { install, Renderer, Scene, PerspectiveCamera, OrthographicCamera, OrbitControls, Mesh, Points, OBJLoader, AxesHelper, BoxGeometry, BufferGeometry, PlaneGeometry, SphereGeometry, MeshBasicMaterial, MeshLambertMaterial, PointsMaterial, MeshNormalMaterial, AmbientLight, PointLight, TextureLoader, };
