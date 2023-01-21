import { Mesh, type Side, MeshNormalMaterial, Material } from "three";
export interface Props {
    /**
     * Defines which side of faces will be rendered - front, back or both. Represtented by `THREE.Side`.
     */
    side?: Side;
    /**
     * Name of the material
     */
    name?: string;
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
    side: {
        type: null;
        required: false;
        default: Side;
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
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
    three: MeshNormalMaterial;
    addMaterial: (g: Material) => void;
    mesh: Mesh<import("three").BufferGeometry, Material | Material[]> | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    side: {
        type: null;
        required: false;
        default: Side;
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
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
    name: string;
    opacity: number;
    side: any;
    transparent: boolean;
}>;
export default _sfc_main;
