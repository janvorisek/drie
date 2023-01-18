import { inject, provide } from "vue";
import type { Mesh } from "three";
import { Color, LineBasicMaterial } from "three";
export interface Props {
    /**
     * Color of the material.
     */
    color?: string | number;
    /**
     * Float in the range of `0.0 - 1.0` indicating how transparent the material is.
     */
    opacity?: number;
    /**
     * Defines whether this material is transparent.
     */
    transparent?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    opacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    mesh: Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
    three: LineBasicMaterial;
    applyProps: () => void;
    inject: typeof inject;
    provide: typeof provide;
    readonly Color: typeof Color;
    readonly LineBasicMaterial: typeof LineBasicMaterial;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    opacity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    color: string | number;
    opacity: number;
    transparent: boolean;
}>;
export default _sfc_main;
