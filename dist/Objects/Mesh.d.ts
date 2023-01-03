import { BufferGeometry, Mesh, MeshBasicMaterial, Scene } from "three";
import { Vector3Like } from "../types";
export interface Props {
    /**
     * Whether the object gets rendered into shadow map.
     */
    castShadow?: boolean;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local position.
     */
    position?: Vector3Like;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
    /**
     * A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians.
     */
    rotation?: Vector3Like;
    /**
     * A [Vector3Like](/types#vector3like) representing the object's local scale.
     */
    scale?: Vector3Like;
}
declare const _sfc_main: import("vue").DefineComponent<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
}, {
    props: any;
    scene: Scene;
    geometry: BufferGeometry;
    material: MeshBasicMaterial;
    three: Mesh<BufferGeometry, MeshBasicMaterial>;
    applyProps: (props: Props) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    castShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    position: {
        type: null;
        required: false;
        default: () => number[];
    };
    receiveShadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
}>>, {
    scale: any;
    position: any;
    rotation: any;
    castShadow: boolean;
    receiveShadow: boolean;
}>;
export default _sfc_main;
