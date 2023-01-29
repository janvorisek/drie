import { BufferGeometry, Object3D } from "three";
import { slot } from "ts-event-bus";

const DrieEvents = {
  geometryChanged: slot<BufferGeometry>(),
  object3DChanged: slot<Object3D>(),
  object3DTranslated: slot<Object3D>(),
  sayHello: slot<string>(),
  getTime: slot<null, string>(),
  multiply: slot<{ a: number; b: number }, number>(),
  ping: slot<void>(),
};

export default DrieEvents;
