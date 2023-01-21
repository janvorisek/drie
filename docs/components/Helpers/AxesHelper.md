# AxesHelper
An axis object to visualize the 3 axes in a simple way.

The X axis is red. The Y axis is green. The Z axis is blue.

## Example

### Code

```vue-html
<AxesHelper :size="3" />
```


## Props

| Prop name | Description                                                                                     | Type        | Default            |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` position  `| A [Vector3Like](/types#vector3like) representing the object's local position.                   | Vector3Like | [0, 0, 0] |
|` rotation  `| A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians. | Vector3Like | [0, 0, 0] |
|` size      `| Size of the lines representing the axes.                                                        | number      | 1                  |
|` scale     `| A [Vector3Like](/types#vector3like) representing the object's local scale.                      | Vector3Like | [1, 1, 1] |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

