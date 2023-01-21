# LineLoop
A component drawing series of lines between vertices and connects the last vertex back to the first.

## Example

### Code

```vue-html
<LineLoop>
  <!-- Any line material is supported -->
  <LineBasicMaterial color="black" />
  <PlaneGeometry />
</LineLoop>
```


## Props

| Prop name | Description                                                                                     | Type        | Default            |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------ |
|` position  `| A [Vector3Like](/types#vector3like) representing the object's local position.                   | Vector3Like | [0, 0, 0] |
|` rotation  `| A [Vector3Like](/types#vector3like) representing local rotation (see Euler angles), in radians. | Vector3Like | [0, 0, 0] |
|` scale     `| A [Vector3Like](/types#vector3like) representing the object's local scale.                      | Vector3Like | [1, 1, 1] |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

