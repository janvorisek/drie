import { OrthographicCamera } from "three";
import { Vector3Like } from "../types";
export interface Props {
    name?: string;
    up?: Vector3Like;
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
}, {
    props: any;
    three: OrthographicCamera;
    applyProps: (props: any) => void;
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
}>>, {
    name: string;
    up: any;
}>;
export default _sfc_main;
