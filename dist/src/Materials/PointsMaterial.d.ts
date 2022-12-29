import { inject, watch, provide } from "vue";
import type { Mesh } from "three";
import { Color, PointsMaterial } from "three";
export interface Props {
    color?: string | number;
    sizeAttenuation?: boolean;
    size?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    sizeAttenuation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: any;
    mesh: Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
    three: PointsMaterial;
    applyProps: (props: any) => void;
    inject: typeof inject;
    watch: typeof watch;
    provide: typeof provide;
    readonly Color: typeof Color;
    readonly PointsMaterial: typeof PointsMaterial;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    sizeAttenuation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    size: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    color: string | number;
    sizeAttenuation: boolean;
    size: number;
}>;
export default _sfc_main;
