export interface Props {
    /**
     * Whether the object gets rendered into shadow map.
     */
    castShadow?: boolean;
    /**
     * The number of instances.
     */
    count: number;
    /**
     * Optional name of the geometry.
     * This allows reusing of the geometry.
     */
    geometry?: string | null;
    /**
     * Optional name of the material.
     * This allows reusing of the material.
     */
    material?: string | null;
    /**
     * Whether the material receives shadows.
     */
    receiveShadow?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
export default _sfc_main;
