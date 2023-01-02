import { Vector3, Object3D, Group, BufferGeometry } from "three";
import { Vector3Like } from "./types";
export declare const vector3LikeToVector3: (data?: Vector3Like) => Vector3;
export declare const vector3LikeToArray: (data?: Vector3Like) => number[];
export declare const setVectorProp: (prop: string, value: Vector3, obj: Object3D) => void;
export declare const handleVectorProp: (props: {
    [key: string]: any;
}, prop: string, obj: Object3D | Group, registerWatch?: boolean) => void;
export declare const handlePropCallback: (props: {
    [key: string]: any;
}, prop: string, fn: () => void) => void;
export declare function copyGeo(three: BufferGeometry, tmp: BufferGeometry): void;
export declare function disposeTHREEObject(obj: any): boolean;
