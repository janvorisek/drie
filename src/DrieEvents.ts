import { BufferGeometry } from "three";
import { slot } from "ts-event-bus";

const DrieEvents = {
  geometryChanged: slot<BufferGeometry>(),
  sayHello: slot<string>(),
  getTime: slot<null, string>(),
  multiply: slot<{ a: number; b: number }, number>(),
  ping: slot<void>(),
};

export default DrieEvents;
