import { BufferGeometry, Points, PointsMaterial, Scene } from "three";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * Name of the Points mesh.
     */
    name?: string;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local scale.
     */
    scale?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: null;
        required: false;
        default: () => number[];
    };
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    scene: Scene;
    geometry: BufferGeometry;
    material: PointsMaterial;
    three: Points<BufferGeometry, PointsMaterial>;
    applyProps: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: null;
        required: false;
        default: () => number[];
    };
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
}>>, {
    name: string;
    scale: any;
    position: any;
    rotation: any;
}>;
export default _sfc_main;
