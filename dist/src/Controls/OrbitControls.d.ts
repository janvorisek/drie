import { Camera } from "three";
import { inject, ref, watch, type Ref } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: any;
    three: any;
    camera: Camera | undefined;
    canvas: Ref<HTMLCanvasElement> | undefined;
    readonly Camera: typeof Camera;
    readonly OrbitControls: any;
    inject: typeof inject;
    ref: typeof ref;
    watch: typeof watch;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: false;
    };
}>>, {}>;
export default _sfc_main;
