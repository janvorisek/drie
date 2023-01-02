import { BufferGeometry, Mesh, MeshBasicMaterial, Scene } from "three";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local scale.
     */
    scale?: Vector3Like;
    /**
     * Whether the object gets rendered into shadow map.
     */
    castShadow?: boolean;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: null;
        required: false;
        default: () => number[];
    };
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    scene: Scene;
    geometry: BufferGeometry;
    material: MeshBasicMaterial;
    three: Mesh<BufferGeometry, MeshBasicMaterial>;
    applyProps: (props: Props) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: null;
        required: false;
        default: () => number[];
    };
    scale: {
        type: null;
        required: false;
        default: () => number[];
    };
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    position: any;
    rotation: any;
    scale: any;
    castShadow: boolean;
    receiveShadow: boolean;
}>;
export default _sfc_main;
