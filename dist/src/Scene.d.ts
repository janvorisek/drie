import { Scene } from "three";
export interface Props {
    /**
     * Defines the background color of the scene.
     */
    background?: string | number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    background: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}, {
    props: any;
    three: Scene;
    applyProps: (props: Props) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    background: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}>>, {
    background: string | number;
}>;
export default _sfc_main;
