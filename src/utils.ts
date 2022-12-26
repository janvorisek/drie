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

// Handle position prop
export const handlePositionProp = (props: any, obj: Object3D) => {
  if (props.position) {
    const position = vector3LikeToVector3(props.position);
    obj.position.set(position.x, position.y, position.z);
  }

  watch(
    () => props.position,
    () => {
      if (props.position) {
        const position = vector3LikeToVector3(props.position);
        obj.position.set(position.x, position.y, position.z);
      }
    },
  );
};

// Handle rotation prop
export const handleRotationProp = (props: any, obj: Object3D) => {
  if (props.rotation) {
    const position = vector3LikeToVector3(props.rotation);
    obj.rotation.setFromVector3(position);
  }

  watch(
    () => props.rotation,
    () => {
      if (props.rotation) {
        const position = vector3LikeToVector3(props.rotation);
        obj.rotation.setFromVector3(position);
        obj.updateMatrixWorld();
      }
    },
  );
};

// Handle rotation prop
export const handleScaleProp = (props: any, obj: Object3D) => {
  if (props.scale) {
    const position = vector3LikeToVector3(props.scale);
    obj.scale.set(position.x, position.y, position.z);
  }

  watch(
    () => props.scale,
    () => {
      if (props.scale) {
        const position = vector3LikeToVector3(props.scale);
        obj.scale.set(position.x, position.y, position.z);
      }
    },
  );
};
