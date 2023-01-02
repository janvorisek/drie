import { inject, watch, provide } from "vue";
import type { Mesh } from "three";
import { Color, LineBasicMaterial } from "three";
export interface Props {
    /**
     * Color of the material.
     */
    color?: string | number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}, {
    props: any;
    mesh: Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
    three: LineBasicMaterial;
    applyProps: (props: Props) => void;
    inject: typeof inject;
    watch: typeof watch;
    provide: typeof provide;
    readonly Color: typeof Color;
    readonly LineBasicMaterial: typeof LineBasicMaterial;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
}>>, {
    color: string | number;
}>;
export default _sfc_main;
