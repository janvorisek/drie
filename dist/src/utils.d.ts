import { Vector3, Object3D } from "three";
import { Vector3Like } from "./types";
export declare const vector3LikeToVector3: (data?: Vector3Like) => Vector3;
export declare const vector3LikeToArray: (data?: Vector3Like) => number[];
export declare const handlePositionProp: (props: any, obj: Object3D) => void;
export declare const handleRotationProp: (props: any, obj: Object3D) => void;
export declare const handleScaleProp: (props: any, obj: Object3D) => void;
