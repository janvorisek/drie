import { Vector3, Object3D, Group, BufferGeometry, Vector2, Camera, Raycaster, Scene, Intersection } from "three";
import { inject, onMounted, onUnmounted, type Ref, watch } from "vue";
import { Vector2Like, Vector3Like } from "./types";

export const vector3LikeToVector3 = (data?: Vector3Like) => {
  if (data === undefined) return new Vector3(0, 0, 0);

  if ("x" in data) return new Vector3(data.x, data.y, data.z);
  else return new Vector3(data[0], data[1], data[2]);
};

export const vector2LikeToVector2 = (data?: Vector2Like) => {
  if (data === undefined) return new Vector2(0, 0);

  if ("x" in data) return new Vector2(data.x, data.y);
  else return new Vector2(data[0], data[1]);
};

export const vector3LikeToArray = (data?: Vector3Like) => {
  if (data === undefined) return [0, 0, 0];

  if ("x" in data) return [data.x, data.y, data.z];
  else return data;
};

export const setVectorProp = (prop: string, value: Vector3, obj: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (obj[prop].isVector3) (obj[prop] as Vector3).set(value.x, value.y, value.z);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  else if ("isEuler" in obj[prop]) obj[prop].setFromVector3(value);
};

// Handle vector prop
export const handleVectorProp = (props: { [key: string]: any }, prop: string, obj: any, registerWatch = true) => {
  if (obj === null) return;

  if (props[prop] !== undefined) {
    const position = vector3LikeToVector3(props[prop]);

    setVectorProp(prop, position, obj);
  }

  if (!registerWatch) return;

  watch(
    () => props[prop],
    () => {
      if (props[prop] !== undefined) {
        const position = vector3LikeToVector3(props[prop]);

        setVectorProp(prop, position, obj);
      }
    },
  );
};

export const setVector2Prop = (prop: string, value: Vector2, obj: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (obj[prop].isVector2) (obj[prop] as Vector2).set(value.x, value.y);
};

// Handle vector prop
export const handleVector2Prop = (props: { [key: string]: any }, prop: string, obj: any, registerWatch = true) => {
  if (obj === null) return;

  if (props[prop] !== undefined) {
    const position = vector2LikeToVector2(props[prop]);

    setVector2Prop(prop, position, obj);
  }

  if (!registerWatch) return;

  watch(
    () => props[prop],
    () => {
      if (props[prop] !== undefined) {
        const position = vector2LikeToVector2(props[prop]);

        setVector2Prop(prop, position, obj);
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

export function manageParentRelationship(three: Object3D) {
  const scene = inject("scene") as Scene;
  const parent = inject("parent", undefined) as Object3D | undefined;

  onMounted(() => {
    if (parent) parent.add(three);
    else scene.add(three);
  });

  onUnmounted(() => {
    if (parent) parent.remove(three);
    else scene.remove(three);
  });
}

export function _handleRaycasting(intersect: any[], props: any, emit: any) {
  const camera = inject("camera") as Ref<Camera>;
  const canvas = inject<Ref<HTMLCanvasElement>>("canvas");
  const scene = inject("scene") as Scene;

  const onCanvasClick = (e: MouseEvent) => {
    const raycaster = new Raycaster();
    const pointer = getPointer(e);

    raycaster.setFromCamera(pointer, camera.value);

    const intersects = raycaster.intersectObjects(intersect);

    if (intersects.length > 0) emit("click", intersects, pointer);
  };

  let mouseOverObject = false;
  let prevIntersects: Intersection[] = [];

  const onCanvasMouseMove = (e: MouseEvent) => {
    const raycaster = new Raycaster();
    const pointer = getPointer(e);

    raycaster.setFromCamera(pointer, camera.value);

    const intersects = raycaster.intersectObjects(intersect);

    if (intersects.length > 0) {
      prevIntersects = intersects;
      if (mouseOverObject === false) emit("mouseenter", intersects, pointer);

      mouseOverObject = true;
      emit("mousemove", intersects, pointer);
    } else {
      if (mouseOverObject) emit("mouseleave", prevIntersects, pointer);
      mouseOverObject = false;
      prevIntersects = [];
    }
  };

  onMounted(() => {
    if (props.enableRaycasting) {
      if (canvas?.value == null) return;
      canvas?.value.addEventListener("click", onCanvasClick);
      canvas?.value.addEventListener("mousemove", onCanvasMouseMove);
    }
  });

  onUnmounted(() => {
    if (props.enableRaycasting) {
      if (canvas?.value == null) return;
      canvas?.value.removeEventListener("click", onCanvasClick);
      canvas?.value.removeEventListener("mousemove", onCanvasMouseMove);
    }
  });

  watch(
    () => props.enableRaycasting,
    (newVal) => {
      if (newVal) {
        canvas?.value.addEventListener("click", onCanvasClick);
        canvas?.value.addEventListener("mousemove", onCanvasMouseMove);
      } else {
        canvas?.value.removeEventListener("click", onCanvasClick);
        canvas?.value.removeEventListener("mousemove", onCanvasMouseMove);
      }
    },
  );
}

export function handleRaycasting(intersect: any[], props: any) {
  const camera = inject("camera") as Ref<Camera>;
  const canvas = inject<Ref<HTMLCanvasElement>>("canvas");
  const scene = inject("scene") as Scene;

  const onCanvasClick = (e: MouseEvent) => {
    const raycaster = new Raycaster();
    const pointer = getPointer(e);

    raycaster.setFromCamera(pointer, camera.value);

    const intersects = raycaster.intersectObjects(intersect);

    if (intersects.length > 0) props.onClick(intersects, pointer);
  };

  let mouseOverObject = false;
  let prevIntersects: Intersection[] = [];

  const onCanvasMouseMove = (e: MouseEvent) => {
    if (props.onMouseEnter === null && props.onMouseMove === null && props.onMouseLeave === null) return;

    const raycaster = new Raycaster();
    const pointer = getPointer(e);

    raycaster.setFromCamera(pointer, camera.value);

    const intersects = raycaster.intersectObjects(intersect);

    if (intersects.length > 0) {
      prevIntersects = intersects;
      if (mouseOverObject === false && props.onMouseEnter !== null) props.onMouseEnter(intersects, pointer);

      mouseOverObject = true;
      if (props.onMouseLeave !== null) props.onMouseMove(intersects, pointer);
    } else {
      if (mouseOverObject && props.onMouseLeave !== null) props.onMouseLeave(prevIntersects, pointer);
      mouseOverObject = false;
      prevIntersects = [];
    }
  };

  onMounted(() => {
    if (props.enableRaycasting) {
      if (canvas?.value == null) return;
      canvas?.value.addEventListener("click", onCanvasClick);
      canvas?.value.addEventListener("mousemove", onCanvasMouseMove);
    }
  });

  onUnmounted(() => {
    if (props.enableRaycasting) {
      if (canvas?.value == null) return;
      canvas?.value.removeEventListener("click", onCanvasClick);
      canvas?.value.removeEventListener("mousemove", onCanvasMouseMove);
    }
  });

  watch(
    () => props.enableRaycasting,
    (newVal) => {
      if (newVal) {
        canvas?.value.addEventListener("click", onCanvasClick);
        canvas?.value.addEventListener("mousemove", onCanvasMouseMove);
      } else {
        canvas?.value.removeEventListener("click", onCanvasClick);
        canvas?.value.removeEventListener("mousemove", onCanvasMouseMove);
      }
    },
  );
}

export function getPointer(e: MouseEvent) {
  const pointer = new Vector2();

  const bb = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect();

  pointer.x = ((e.clientX - bb.left) / bb.width) * 2 - 1;
  pointer.y = -((e.clientY - bb.top) / bb.height) * 2 + 1;

  return pointer;
}
