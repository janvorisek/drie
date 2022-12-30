import { Vector3, Object3D } from "three";
import { watch } from "vue";
import { Vector3Like } from "./types";

export const vector3LikeToVector3 = (data?: Vector3Like) => {
  if (data === undefined) return new Vector3(0, 0, 0);

  if ("x" in data) return new Vector3(data.x, data.y, data.z);
  else return new Vector3(data[0], data[1], data[2]);
};

export const vector3LikeToArray = (data?: Vector3Like) => {
  if (data === undefined) return [0, 0, 0];

  if ("x" in data) return [data.x, data.y, data.z];
  else return data;
};

// Handle vector prop
export const handleVectorProp = (props: { [key: string]: any }, prop: string, obj: Object3D) => {
  if (props[prop] !== undefined) {
    const position = vector3LikeToVector3(props[prop]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (obj[prop].isVector3) (obj[prop] as Vector3).set(position.x, position.y, position.z);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else if (typeof obj[prop] === "function") obj[prop](position.x, position.y, position.z);
  }

  watch(
    () => props[prop],
    () => {
      if (props[prop] !== undefined) {
        const position = vector3LikeToVector3(props[prop]);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (obj[prop].isVector3) (obj[prop] as Vector3).set(position.x, position.y, position.z);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        else if (typeof obj[prop] === "function") obj[prop](position.x, position.y, position.z);
      }
    },
  );
};
