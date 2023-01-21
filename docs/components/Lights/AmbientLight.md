# AmbientLight
This light globally illuminates all objects in the scene equally.

This light cannot be used to cast shadows as it does not have a direction.

## Example

### Code

```vue-html
<AmbientLight :color="0xffffff" />
```


## Props

| Prop name | Description                                      | Type   | Default  |
| --------- | ------------------------------------------------ | ------ | -------- |
|` color     `| Color of the light                               | union  | 0xffffff |
|` intensity `| Numeric value of the light's strength/intensity. | number | 1        |

---

