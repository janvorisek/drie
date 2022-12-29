import { AxesHelper, Scene } from "three";
import { Vector3Like } from "../types";
export interface Props {
    size?: number;
    position?: Vector3Like;
    rotation?: Vector3Like;
    scale?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    size: {
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
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    scene: Scene;
    three: AxesHelper;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
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
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
}>>, {
    position: any;
    rotation: any;
    scale: any;
    size: number;
}>;
export default _sfc_main;
