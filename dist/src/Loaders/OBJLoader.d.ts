import { Group, Scene } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Vector3Like } from "../types";
export interface Props {
    url: string;
    position?: Vector3Like;
    rotation?: Vector3Like;
    scale?: Vector3Like;
    castShadow?: boolean;
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
    loader: OBJLoader;
    scene: Scene;
    three: Group;
    load: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    position: any;
    rotation: any;
    scale: any;
    castShadow: boolean;
    receiveShadow: boolean;
}>;
export default _sfc_main;
