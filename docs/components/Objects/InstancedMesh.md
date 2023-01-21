# InstancedMesh
A special version of Mesh with instanced rendering support. Use InstancedMesh if you have to render a large number of objects with the same geometry and material but with different world transformations. The usage of InstancedMesh will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.


## Props

| Prop name     | Description                                                             | Type    | Default |
| ------------- | ----------------------------------------------------------------------- | ------- | ------- |
|` castShadow    `| Whether the object gets rendered into shadow map.                       | boolean | false   |
|` count         `| The number of instances.                                                | number  |         |
|` geometry      `| Optional name of the geometry.<br/>This allows reusing of the geometry. | union   | null    |
|` material      `| Optional name of the material.<br/>This allows reusing of the material. | union   | null    |
|` receiveShadow `| Whether the material receives shadows.                                  | boolean | false   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

