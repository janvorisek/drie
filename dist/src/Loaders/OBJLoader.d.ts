import { Group, Scene } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * A string containing the path/URL of the `.obj` file.
     */
    url: string;
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
    /**
     * Whether the object gets rendered into shadow map.
     */
    castShadow?: boolean;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        required: true;
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
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    emit: {
        (event: "load", group: Group): void;
        (event: "progress", xhr: ProgressEvent<EventTarget>): void;
        (event: "error", error: ErrorEvent): void;
    };
    loader: OBJLoader;
    scene: Scene;
    three: Group;
    load: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "progress" | "error")[], "load" | "progress" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: true;
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
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    scale: any;
    position: any;
    rotation: any;
    castShadow: boolean;
    receiveShadow: boolean;
}>;
export default _sfc_main;
