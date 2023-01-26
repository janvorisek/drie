import { inject } from "vue";
import { Color, HemisphereLight, Scene } from "three";
export interface Props {
    /**
     * The ground color.
     */
    groundColor?: string | number;
    /**
     * Numeric value of the light's strength/intensity.
     */
    intensity?: number;
    /**
     * The sky color.
     */
    skyColor?: string | number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    groundColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    intensity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    skyColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}, {
    props: any;
    scene: Scene;
    three: HemisphereLight;
    applyProps: () => void;
    inject: typeof inject;
    readonly Color: typeof Color;
    readonly HemisphereLight: typeof HemisphereLight;
    readonly Scene: typeof Scene;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    groundColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    intensity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    skyColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}>>, {
    intensity: number;
    groundColor: string | number;
    skyColor: string | number;
}>;
export default _sfc_main;
