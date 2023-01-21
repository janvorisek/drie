# PointLight
A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.

## Example

### Code

```vue-html
<PointLight :position="[0, 0, 10]" :intensity="0.25" :cast-shadow="true" />
```


## Props

| Prop name  | Description                                                               | Type        | Default            |
| ---------- | ------------------------------------------------------------------------- | ----------- | ------------------ |
|` castShadow `| If set to true light will cast dynamic shadows.                           | boolean     | false              |
|` color      `| Color of the light                                                        | union       | 0xffffff           |
|` intensity  `| Numeric value of the light's strength/intensity.                          | number      | 1                  |
|` position   `| A Vector3Like representing the object's local position.                   | Vector3Like | [0, 0, 0] |
|` rotation   `| A Vector3Like representing local rotation (see Euler angles), in radians. | Vector3Like | [0, 0, 0] |
|` scale      `| A Vector3Like representing the object's local scale.                      | Vector3Like | [1, 1, 1] |

---

