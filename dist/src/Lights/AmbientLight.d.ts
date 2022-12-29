import { inject, watch } from "vue";
import { Color, AmbientLight, Scene } from "three";
export interface Props {
    color?: string | number;
    intensity?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {
    props: any;
    scene: Scene;
    three: AmbientLight;
    applyProps: (props: Props) => void;
    inject: typeof inject;
    watch: typeof watch;
    readonly Color: typeof Color;
    readonly AmbientLight: typeof AmbientLight;
    readonly Scene: typeof Scene;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    color: string | number;
    intensity: number;
}>;
export default _sfc_main;
