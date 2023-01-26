import { Group, Intersection, Vector2 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * Whether the object gets rendered into shadow map.
     */
    castShadow?: boolean;
    /**
     * Component will emit mouse events when raycasting is enabled
     */
    enableRaycasting?: boolean;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
    /**
     * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local scale.
     */
    scale?: Vector3Like;
    /**
     * A string containing the path/URL of the `.obj` file.
     */
    url: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableRaycasting: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    url: {
        type: StringConstructor;
        required: true;
    };
}, {
    props: any;
    emit: {
        (event: "load", group: Group): void;
        (event: "progress", xhr: ProgressEvent<EventTarget>): void;
        (event: "error", error: ErrorEvent): void;
        (event: "click", is: Intersection[], pointer: Vector2): void;
        (event: "mousemove", is: Intersection[], pointer: Vector2): void;
        (event: "mouseenter", is: Intersection[], pointer: Vector2): void;
        (event: "mouseleave", is: Intersection[], pointer: Vector2): void;
    };
    loader: GLTFLoader;
    three: Group;
    load: () => void;
    applyProps: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "mousemove" | "mouseenter" | "mouseleave" | "load" | "progress" | "error")[], "click" | "mousemove" | "mouseenter" | "mouseleave" | "load" | "progress" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableRaycasting: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    url: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    scale: any;
    position: any;
    rotation: any;
    castShadow: boolean;
    receiveShadow: boolean;
    enableRaycasting: boolean;
}>;
export default _sfc_main;