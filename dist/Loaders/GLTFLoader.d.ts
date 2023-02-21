import { AnimationClip, Group, Intersection, Vector2 } from "three";
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
     * Name of the Group.
     */
    name?: string;
    /**
     * Callback to be fired when Group content clicked.
     */
    onClick?: (is?: Intersection, mv?: Vector2) => void | null;
    /**
     * Callback to be fired when mouse-moving over Group content.
     */
    onMouseMove?: (is?: Intersection, mv?: Vector2) => void | null;
    /**
     * Callback to be fired when Group content entered by mouse.
     */
    onMouseEnter?: (is?: Intersection, mv?: Vector2) => void | null;
    /**
     * Callback to be fired when Group content left by mouse.
     */
    onMouseLeave?: (is?: Intersection, mv?: Vector2) => void | null;
    /**
     * A [Vector3Like](/advanced/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
    /**
     * A [Vector3Like](/advanced/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A [Vector3Like](/advanced/types#vector3like) representing the object's local scale.
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
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseMove: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseEnter: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseLeave: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
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
        (event: "load", group: Group, animations: AnimationClip[]): void;
        (event: "progress", xhr: ProgressEvent<EventTarget>): void;
        (event: "error", error: ErrorEvent): void;
    };
    loader: GLTFLoader;
    three: Group;
    load: () => void;
    applyProps: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "progress" | "error")[], "load" | "progress" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseMove: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseEnter: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
    };
    onMouseLeave: {
        type: FunctionConstructor;
        required: false;
        default: () => null;
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
    onLoad?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    scale: any;
    position: any;
    rotation: any;
    castShadow: boolean;
    receiveShadow: boolean;
    enableRaycasting: boolean;
    onClick: Function;
    onMouseMove: Function;
    onMouseEnter: Function;
    onMouseLeave: Function;
}>;
export default _sfc_main;
