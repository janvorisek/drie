import { type Vector3Like } from "../types";
export declare type Mode = "translate" | "rotate" | "scale";
export interface Props {
    /**
     * The current transformation mode.
     * Possible values are `"translate"`, `"rotate"` and `"scale"`.
     */
    mode?: Mode;
    /**
     * A [Vector3Like](/advanced/types#vector3like) representing the object's local position.
     * Default position equals to the transformed mesh position.
     */
    position?: Vector3Like;
    /**
     * By default, 3D objects are continuously rotated.
     * If you set this property to a numeric value (radians), you can define in which steps the 3D object should be rotated.
     * Set to `null` to disable snap.
     */
    rotationSnap?: number | null;
    /**
     * Whether or not the x-axis helper should be visible.
     */
    showX?: boolean;
    /**
     * Whether or not the y-axis helper should be visible.
     */
    showY?: boolean;
    /**
     * Whether or not the z-axis helper should be visible.
     */
    showZ?: boolean;
    /**
     * The size of the helper UI (axes/planes).
     */
    size?: number;
    /**
     * By default, 3D objects are continuously translated.
     * If you set this property to a numeric value (world units), you can define in which steps the 3D object should be translated.
     * Set to `null` to disable snap.
     */
    translationSnap?: number | null;
}
declare const _sfc_main: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
export default _sfc_main;
