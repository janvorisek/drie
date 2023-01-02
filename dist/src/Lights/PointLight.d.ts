import { inject, watch } from "vue";
import { Color, PointLight, Scene } from "three";
import { type Vector3Like } from "../types";
export interface Props {
    /**
     * A Vector3Like representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * A Vector3Like representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A Vector3Like representing the object's local scale.
     */
    scale?: Vector3Like;
    /**
     * Color of the light
     */
    color?: string | number;
    /**
     * Numeric value of the light's strength/intensity.
     */
    intensity?: number;
    /**
     * If set to true light will cast dynamic shadows.
     */
    castShadow?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
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
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    intensity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    scene: Scene;
    three: PointLight;
    applyProps: (props: Props) => void;
    inject: typeof inject;
    watch: typeof watch;
    readonly Color: typeof Color;
    readonly PointLight: typeof PointLight;
    readonly Scene: typeof Scene;
    readonly handleVectorProp: (props: {
        [key: string]: any;
    }, prop: string, obj: import("three").Object3D<import("three").Event> | import("three").Group, registerWatch?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    intensity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    scale: any;
    position: any;
    rotation: any;
    castShadow: boolean;
    color: string | number;
    intensity: number;
}>;
export default _sfc_main;
