import { Mesh, type Side, MeshLambertMaterial, Material } from "three";
export interface Props {
    /**
     * Color of the material.
     */
    color?: string | number;
    /**
     * Name of the material
     */
    name?: string;
    /**
     * Defines which side of faces will be rendered - front, back or both. Represtented by `THREE.Side`.
     */
    side?: Side;
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
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    side: {
        type: null;
        required: false;
        default: Side;
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
    three: MeshLambertMaterial;
    addMaterial: (g: Material) => void;
    mesh: Mesh<import("three").BufferGeometry, Material | Material[]> | null;
    applyProps: (props: Props) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    side: {
        type: null;
        required: false;
        default: Side;
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
    color: string | number;
}>;
export default _sfc_main;
