import { inject, watch } from "vue";
import { Color, PointLight, Scene } from "three";
import { type Vector3Like } from "../types";
export interface Props {
    position?: Vector3Like;
    rotation?: Vector3Like;
    scale?: Vector3Like;
    color?: string | number;
    intensity?: number;
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
    position: any;
    rotation: any;
    scale: any;
    castShadow: boolean;
    color: string | number;
    intensity: number;
}>;
export default _sfc_main;
