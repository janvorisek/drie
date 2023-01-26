import { Group, Intersection, Vector2 } from "three";
import { Vector3Like } from "~/types";
export interface Props {
    /**
     * Component will emit mouse events when raycasting is enabled
     */
    enableRaycasting?: boolean;
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
    enableRaycasting: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    three: Group;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableRaycasting: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    scale: any;
    position: any;
    rotation: any;
    enableRaycasting: boolean;
    onClick: Function;
    onMouseMove: Function;
    onMouseEnter: Function;
    onMouseLeave: Function;
}>;
export default _sfc_main;
