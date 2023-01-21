import type { App } from "vue";
import Renderer from "./Renderer";
import Scene from "./Scene";
import PerspectiveCamera from "./Cameras/PerspectiveCamera";
import OrthographicCamera from "./Cameras/OrthographicCamera";
import OrbitControls from "./Controls/OrbitControls";
import Group from "./Objects/Group";
import InstancedMesh from "./Objects/InstancedMesh";
import Line from "./Objects/Line";
import LineLoop from "./Objects/LineLoop";
import LineSegments from "./Objects/LineSegments";
import Mesh from "./Objects/Mesh";
import Points from "./Objects/Points";
import OBJLoader from "./Loaders/OBJLoader";
import AxesHelper from "./Helpers/AxesHelper";
import BoxGeometry from "./Geometries/BoxGeometry";
import BufferGeometry from "./Geometries/BufferGeometry";
import CircleGeometry from "./Geometries/CircleGeometry";
import ConeGeometry from "./Geometries/ConeGeometry";
import CylinderGeometry from "./Geometries/CylinderGeometry";
import EdgesGeometry from "./Geometries/EdgesGeometry";
import ParametricGeometry from "./Geometries/ParametricGeometry";
import PlaneGeometry from "./Geometries/PlaneGeometry";
import RingGeometry from "./Geometries/RingGeometry";
import SphereGeometry from "./Geometries/SphereGeometry";
import WireframeGeometry from "./Geometries/WireframeGeometry";
import LineBasicMaterial from "./Materials/LineBasicMaterial";
import LineDashedMaterial from "./Materials/LineDashedMaterial";
import MeshBasicMaterial from "./Materials/MeshBasicMaterial";
import MeshLambertMaterial from "./Materials/MeshLambertMaterial";
import PointsMaterial from "./Materials/PointsMaterial";
import MeshNormalMaterial from "./Materials/MeshNormalMaterial";
import AmbientLight from "./Lights/AmbientLight";
import PointLight from "./Lights/PointLight";
import TextureLoader from "./Textures/TextureLoader";
declare function install(app: App): void;
export { install, Renderer, Scene, PerspectiveCamera, OrthographicCamera, OrbitControls, Group, InstancedMesh, Line, LineLoop, LineSegments, Mesh, Points, OBJLoader, AxesHelper, BoxGeometry, BufferGeometry, CircleGeometry, ConeGeometry, CylinderGeometry, EdgesGeometry, ParametricGeometry, PlaneGeometry, RingGeometry, SphereGeometry, WireframeGeometry, LineBasicMaterial, LineDashedMaterial, MeshBasicMaterial, MeshLambertMaterial, PointsMaterial, MeshNormalMaterial, AmbientLight, PointLight, TextureLoader, };
