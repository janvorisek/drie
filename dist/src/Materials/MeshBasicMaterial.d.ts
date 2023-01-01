import { Mesh, type Side, MeshBasicMaterial } from "three";
export interface Props {
    color?: string | number;
    side?: Side;
}
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    side: {
        type: null;
        required: false;
        default: Side;
    };
}, {
    props: any;
    mesh: Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
    three: MeshBasicMaterial;
    applyProps: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    side: {
        type: null;
        required: false;
        default: Side;
    };
}>>, {
    color: string | number;
    side: any;
}>;
export default _sfc_main;
