# Group

## Props

| Prop name        | Description                                                                                     | Type        | Values | Default            |
| ---------------- | ----------------------------------------------------------------------------------------------- | ----------- | ------ | ------------------ |
| enableRaycasting | Component will emit mouse events when raycasting is enabled                                     | boolean     | -      | false              |
| position         | A [Vector3Like](/types#vector3like) representing the object's local position.                   | Vector3Like | -      | () =&gt; [0, 0, 0] |
| rotation         | A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians. | Vector3Like | -      | () =&gt; [0, 0, 0] |
| scale            | A [Vector3Like](/types#vector3like) representing the object's local scale.                      | Vector3Like | -      | () =&gt; [1, 1, 1] |

## Events

| Event name | Properties                                                                                                                                                                                                                                                                        | Description                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| click      | **is** `Intersection[]` - An array of [`Intersection`](https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16) being clicked.<br/>**pointer** `Vector2` - A `THREE.Vector2` representing relative element coordinates on the canvas    | Emitted when Object3Ds are clicked.         |
| mousemove  | **is** `Intersection[]` - An array of [`Intersection`](https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16) mousemoved over.<br/>**pointer** `Vector2` - A `THREE.Vector2` representing relative element coordinates on the canvas  | Emitted when mouse is moved over Object3Ds. |
| mouseenter | **is** `Intersection[]` - An array of [`Intersection`](https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16) entered by mouse.<br/>**pointer** `Vector2` - A `THREE.Vector2` representing relative element coordinates on the canvas | Emitted when mouse enters Object3Ds.        |
| mouseleave | **is** `Intersection[]` - An array of [`Intersection`](https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16) left by mouse.<br/>**pointer** `Vector2` - A `THREE.Vector2` representing relative element coordinates on the canvas    | Emitted when mouse leaves Object3Ds.        |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

BEGIN_DOCS
This component makes working with groups of objects easier.

Raycasting may be enabled for group children. When enabled, [events](#events) are fired for corresponding mouse events.
