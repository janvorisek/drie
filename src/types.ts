import { Vector3 } from "three";

export type Vector3Like = Vector3 | [number, number, number] | { x: number; y: number; z: number };
