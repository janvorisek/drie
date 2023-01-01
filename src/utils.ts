import { Vector3, Object3D, Group } from "three";
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

export const setVectorProp = (prop: string, value: Vector3, obj: Object3D) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (obj[prop].isVector3) (obj[prop] as Vector3).set(value.x, value.y, value.z);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  else if ("isEuler" in obj[prop]) obj[prop].setFromVector3(value);
};

// Handle vector prop
export const handleVectorProp = (
  props: { [key: string]: any },
  prop: string,
  obj: Object3D | Group,
  registerWatch = true,
) => {
  if (props[prop] !== undefined) {
    const position = vector3LikeToVector3(props[prop]);

    if ("isGroup" in obj) {
      for (const o of obj.children) handleVectorProp(props, prop, o, false);
    } else {
      setVectorProp(prop, position, obj);
    }
  }

  if (!registerWatch) return;

  watch(
    () => props[prop],
    () => {
      if (props[prop] !== undefined) {
        const position = vector3LikeToVector3(props[prop]);

        if ("isGroup" in obj) {
          for (const o of obj.children) handleVectorProp(props, prop, o, false);
        } else {
          setVectorProp(prop, position, obj);
        }
      }
    },
  );
};

export const handlePropCallback = (props: { [key: string]: any }, prop: string, fn: () => void) => {
  watch(
    () => props[prop],
    () => fn,
  );
};
