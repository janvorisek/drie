import { Color, DirectionalLight } from "three";
import { manageParentRelationship } from "../utils";
import { type Vector3Like } from "../types";
export interface Props {
    /**
     * If set to true light will cast dynamic shadows.
     */
    castShadow?: boolean;
    /**
     * Color of the light.
     */
    color?: string | number;
    /**
     * Numeric value of the light's strength/intensity.
     */
    intensity?: number;
    /**
     * A Vector3Like representing the object's local position.
     */
    position?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    three: DirectionalLight;
    applyProps: () => void;
    readonly Color: typeof Color;
    readonly DirectionalLight: typeof DirectionalLight;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
    readonly handleVectorProp: (props: {
        [key: string]: any;
    }, prop: string, obj: any, registerWatch?: boolean, callback?: (() => void) | undefined) => void;
    readonly manageParentRelationship: typeof manageParentRelationship;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
}>>, {
    position: any;
    castShadow: boolean;
    color: string | number;
    intensity: number;
}>;
export default _sfc_main;
