import { inject } from "vue";
import { Color, DirectionalLight, Scene } from "three";
export interface Props {
    /**
     * Color of the light.
     */
    color?: string | number;
    /**
     * Numeric value of the light's strength/intensity.
     */
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
    three: DirectionalLight;
    applyProps: () => void;
    inject: typeof inject;
    readonly Color: typeof Color;
    readonly DirectionalLight: typeof DirectionalLight;
    readonly Scene: typeof Scene;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
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
