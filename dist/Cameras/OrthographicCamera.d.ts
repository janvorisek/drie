import { OrthographicCamera } from "three";
import { type Ref } from "vue";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * Camera frustum far plane.
     * Must be greater than the current value of near plane.
     */
    far?: number;
    /**
     * Camera target
     */
    lookAt?: Vector3Like;
    /**
     * Camera name
     */
    name?: string;
    /**
     * Camera frustum near plane.
     * The valid range is greater than 0 and less than the current value of the far plane.
     * Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera's near plane.
     */
    near?: number;
    /**
     * Camera position
     */
    position?: Vector3Like;
    /**
     * Camera up vector
     */
    up?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    far: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    lookAt: {
        type: null;
        required: false;
        default: () => number[];
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    near: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    up: {
        type: null;
        required: false;
        default: () => number[];
    };
}, {
    props: any;
    three: OrthographicCamera;
    canvas: Ref<HTMLCanvasElement> | undefined;
    applyProps: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    far: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    lookAt: {
        type: null;
        required: false;
        default: () => number[];
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    near: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    up: {
        type: null;
        required: false;
        default: () => number[];
    };
}>>, {
    name: string;
    lookAt: any;
    up: any;
    position: any;
    far: number;
    near: number;
}>;
export default _sfc_main;
