import { Vector3, Object3D, Group, BufferGeometry } from "three";
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
  if (obj === null) return;

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
    () => {
      fn();
    },
  );
};

export function copyGeo(three: BufferGeometry, tmp: BufferGeometry) {
  if (tmp.hasAttribute("position")) {
    three.setAttribute("position", tmp.getAttribute("position"));
    three.attributes.position.needsUpdate = true;
  }

  if (tmp.hasAttribute("normal")) {
    three.setAttribute("normal", tmp.getAttribute("normal"));
    three.attributes.normal.needsUpdate = true;
  }

  if (tmp.hasAttribute("uv")) {
    three.setAttribute("uv", tmp.getAttribute("uv"));
    three.attributes.uv.needsUpdate = true;
  }

  three.setIndex(tmp.getIndex());
}

export function disposeTHREEObject(obj: any) {
  if (obj.children.length > 0) {
    for (let x = obj.children.length - 1; x >= 0; x--) {
      disposeTHREEObject(obj.children[x]);
    }
  }

  if (obj.geometry) {
    obj.geometry.dispose();
  }

  if (obj.material) {
    if (obj.material.length) {
      for (let i = 0; i < obj.material.length; ++i) {
        if (obj.material[i].map) obj.material[i].map.dispose();
        if (obj.material[i].lightMap) obj.material[i].lightMap.dispose();
        if (obj.material[i].bumpMap) obj.material[i].bumpMap.dispose();
        if (obj.material[i].normalMap) obj.material[i].normalMap.dispose();
        if (obj.material[i].specularMap) obj.material[i].specularMap.dispose();
        if (obj.material[i].envMap) obj.material[i].envMap.dispose();

        obj.material[i].dispose();
      }
    } else {
      if (obj.material.map) obj.material.map.dispose();
      if (obj.material.lightMap) obj.material.lightMap.dispose();
      if (obj.material.bumpMap) obj.material.bumpMap.dispose();
      if (obj.material.normalMap) obj.material.normalMap.dispose();
      if (obj.material.specularMap) obj.material.specularMap.dispose();
      if (obj.material.envMap) obj.material.envMap.dispose();

      obj.material.dispose();
    }
  }

  obj.removeFromParent();

  return true;
}
