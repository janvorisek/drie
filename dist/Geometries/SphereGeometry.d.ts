import { inject, reactive } from "vue";
import { SphereGeometry, BufferGeometry, Mesh } from "three";
import { copyGeo } from "../utils";
export interface Props {
    /**
     * Name of the geometry.
     */
    name?: string;
    /**
     * Sphere radius.
     */
    radius?: number;
    /**
     * Number of horizontal segments.
     * Minimum value is `3`.
     */
    widthSegments?: number;
    /**
     * Number of vertical segments.
     * Minimum value is `2`
     */
    heightSegments?: number;
    /**
     * Specify horizontal starting angle.
     */
    phiStart?: number;
    /**
     * Specify horizontal sweep angle size.
     */
    phiLength?: number;
    /**
     * Specify vertical starting angle
     */
    thetaStart?: number;
    /**
     * Specify vertical sweep angle size
     */
    thetaLength?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    widthSegments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    heightSegments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    phiStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    phiLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: any;
    makeSphere: (radius: number | undefined, widthSegments: number | undefined, heightSegments: number | undefined, phiStart: number | undefined, phiLength: number | undefined, thetaStart: number | undefined, thetaLength: number | undefined) => SphereGeometry;
    three: BufferGeometry;
    mesh: Mesh<BufferGeometry, import("three").Material | import("three").Material[]> | null;
    addGeometry: (g: BufferGeometry) => void;
    redoGeometry: () => void;
    inject: typeof inject;
    onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
    reactive: typeof reactive;
    readonly SphereGeometry: typeof SphereGeometry;
    readonly BufferGeometry: typeof BufferGeometry;
    readonly Mesh: typeof Mesh;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
    readonly copyGeo: typeof copyGeo;
    readonly EventBus: {
        geometryChanged: import("ts-event-bus").Slot<BufferGeometry, void>;
        object3DChanged: import("ts-event-bus").Slot<import("three").Object3D<import("three").Event>, void>;
        object3DTranslated: import("ts-event-bus").Slot<import("three").Object3D<import("three").Event>, void>;
        sayHello: import("ts-event-bus").Slot<string, void>;
        getTime: import("ts-event-bus").Slot<null, string>;
        /**
         * Name of the geometry.
         */
        multiply: import("ts-event-bus").Slot<{
            a: number;
            b: number;
        }, number>;
        ping: import("ts-event-bus").Slot<void, void>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    widthSegments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    heightSegments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    phiStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    phiLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    name: string;
    widthSegments: number;
    heightSegments: number;
    radius: number;
    thetaStart: number;
    thetaLength: number;
    phiStart: number;
    phiLength: number;
}>;
export default _sfc_main;
