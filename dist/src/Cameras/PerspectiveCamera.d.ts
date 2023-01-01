import { PerspectiveCamera } from "three";
import { type Ref } from "vue";
import { type Vector3Like } from "../types";
export interface Props {
    /**
     * Camera name
     */
    name?: string;
    /**
     * Camera up vector
     */
    up?: Vector3Like;
    /**
     * Camera position
     */
    position?: Vector3Like;
    /**
     * Camera target
     */
    lookAt?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    up: {
        type: null;
        required: false;
        default: () => number[];
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    lookAt: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    three: PerspectiveCamera;
    canvas: Ref<HTMLCanvasElement> | undefined;
    applyProps: (props: Props) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    up: {
        type: null;
        required: false;
        default: () => number[];
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    lookAt: {
        type: null;
        required: false;
        default: () => number[];
    };
}>>, {
    name: string;
    up: any;
    position: any;
    lookAt: any;
}>;
export default _sfc_main;
