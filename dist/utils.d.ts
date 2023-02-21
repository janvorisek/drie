import { Vector3, Object3D, BufferGeometry, Vector2 } from "three";
import { Vector2Like, Vector3Like } from "./types";
export declare const vector3LikeToVector3: (data?: Vector3Like) => Vector3;
export declare const vector2LikeToVector2: (data?: Vector2Like) => Vector2;
export declare const vector3LikeToArray: (data?: Vector3Like) => number[];
export declare const setVectorProp: (prop: string, value: Vector3, obj: any) => void;
export declare const handleVectorProp: (props: {
    [key: string]: any;
}, prop: string, obj: any, registerWatch?: boolean, callback?: () => void) => void;
export declare const setVector2Prop: (prop: string, value: Vector2, obj: any) => void;
export declare const handleVector2Prop: (props: {
    [key: string]: any;
}, prop: string, obj: any, registerWatch?: boolean) => void;
export declare const handlePropCallback: (props: {
    [key: string]: any;
}, prop: string, fn: () => void) => void;
export declare function copyGeo(three: BufferGeometry, tmp: BufferGeometry): void;
export declare function disposeTHREEObject(obj: any): boolean;
export declare function manageParentRelationship(three: Object3D): void;
export declare function _handleRaycasting(intersect: any[], props: any, emit: any): void;
export declare function handleRaycasting(intersect: any[], props: any): void;
export declare function getPointer(e: MouseEvent): Vector2;
