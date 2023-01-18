import { inject, provide } from "vue";
import type { Mesh } from "three";
import { Color, LineDashedMaterial } from "three";
export interface Props {
    /**
     * Color of the material.
     */
    color?: string | number;
    /**
     * The scale of the dashed part of a line.
     */
    scale?: number;
    /**
     * The size of the dash. This is both the gap with the stroke.
     */
    dashSize?: number;
    /**
     * The size of the gap.
     */
    gapSize?: number;
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
    scale: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    dashSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    gapSize: {
        type: NumberConstructor;
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
    three: LineDashedMaterial;
    applyProps: () => void;
    inject: typeof inject;
    provide: typeof provide;
    readonly Color: typeof Color;
    readonly LineDashedMaterial: typeof LineDashedMaterial;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    scale: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    dashSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    gapSize: {
        type: NumberConstructor;
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
    scale: number;
    color: string | number;
    opacity: number;
    transparent: boolean;
    dashSize: number;
    gapSize: number;
}>;
export default _sfc_main;
