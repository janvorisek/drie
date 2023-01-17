# OBJLoader

  <script setup>
  import OBJLoader from '../../examples/OBJLoader.vue'
  </script>

This component manages [`THREE.OBJLoader`](https://threejs.org/docs/?q=objloader#examples/en/loaders/OBJLoader).

`<OBJLoader>` behaves as a [`<Group>`](/components/Objects/Group) containing meshes loaded from the `.obj` file.

## Example

  <ClientOnly>
  <OBJLoader />
  </ClientOnly>


## Props

| Prop name     | Description                                                                                     | Type        | Default            |
| ------------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` castShadow    `| Whether the object gets rendered into shadow map.                                               | boolean     | false              |
|` position      `| A [Vector3Like](/types#vector3like) representing the object's local position.                   | Vector3Like | [0, 0, 0] |
|` receiveShadow `| Whether the material receives shadows.                                                          | boolean     | false              |
|` rotation      `| A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians. | Vector3Like | [0, 0, 0] |
|` scale         `| A [Vector3Like](/types#vector3like) representing the object's local scale.                      | Vector3Like | [1, 1, 1] |
|` url           `| A string containing the path/URL of the `.obj` file.                                            | string      |                    |

## Events

| Event name | Properties                                       | Description                                                                 |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| load       | **group** `Group` - An instance of `THREE.Group` | Emitted when OBJ file is successfuly loaded, parsed and added to the scene. |
| progress   |                                                  | Emmited on XHR progress                                                     |
| error      |                                                  | Emitted on XHR error or OBJ parsing error                                   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

