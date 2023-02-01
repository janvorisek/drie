import { GridHelper } from "three";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * The color of the centerline.
     * This can be a Color, a hexadecimal value and an CSS-Color name.
     */
    colorCenterLine?: number | string;
    /**
     * The color of the lines of the grid.
     * This can be a Color, a hexadecimal value and an CSS-Color name.
     */
    colorGrid?: number | string;
    /**
     * The number of divisions across the grid.
     */
    divisions?: number;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * The size of the grid.
     */
    size?: number;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local scale.
     */
    scale?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    colorCenterLine: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    colorGrid: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    divisions: {
        type: NumberConstructor;
        required: false;
        default: number;
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
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    three: GridHelper;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorCenterLine: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    colorGrid: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    divisions: {
        type: NumberConstructor;
        required: false;
        default: number;
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
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
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
    size: number;
    colorCenterLine: string | number;
    colorGrid: string | number;
    divisions: number;
}>;
export default _sfc_main;
