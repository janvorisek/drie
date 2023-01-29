import { BufferGeometry, Object3D } from "three";
declare const DrieEvents: {
    geometryChanged: import("ts-event-bus").Slot<BufferGeometry, void>;
    object3DChanged: import("ts-event-bus").Slot<Object3D<import("three").Event>, void>;
    object3DTranslated: import("ts-event-bus").Slot<Object3D<import("three").Event>, void>;
    sayHello: import("ts-event-bus").Slot<string, void>;
    getTime: import("ts-event-bus").Slot<null, string>;
    multiply: import("ts-event-bus").Slot<{
        a: number;
        b: number;
    }, number>;
    ping: import("ts-event-bus").Slot<void, void>;
};
export default DrieEvents;
