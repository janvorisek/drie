# OBJLoader

## Props

| Prop name     | Description                                          | Type        | Default            |
| ------------- | ---------------------------------------------------- | ----------- | ------------------ |
|` url           `| A string containing the path/URL of the `.obj` file. | string      |                    |
|` position      `|                                                      | Vector3Like | [0, 0, 0] |
|` rotation      `|                                                      | Vector3Like | [0, 0, 0] |
|` scale         `|                                                      | Vector3Like | [1, 1, 1] |
|` castShadow    `|                                                      | boolean     | false              |
|` receiveShadow `|                                                      | boolean     | false              |

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
