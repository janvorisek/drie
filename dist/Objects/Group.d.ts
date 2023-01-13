import { Group, Intersection, Vector2 } from "three";
import { Vector3Like } from "~/types";
export interface Props {
    /**
     * Component will emit mouse events when raycasting is enabled
     */
    enableRaycasting?: boolean;
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
    emit: {
        (event: "click", is: Intersection[], pointer: Vector2): void;
        (event: "mousemove", is: Intersection[], pointer: Vector2): void;
        (event: "mouseenter", is: Intersection[], pointer: Vector2): void;
        (event: "mouseleave", is: Intersection[], pointer: Vector2): void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "mousemove" | "mouseenter" | "mouseleave")[], "click" | "mousemove" | "mouseenter" | "mouseleave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
}, {
    scale: any;
    position: any;
    rotation: any;
    enableRaycasting: boolean;
}>;
export default _sfc_main;
