# ParametricGeometry

  <script setup>
  import ParametricGeometry from '../../examples/ParametricGeometry.vue'
  </script>

ParametricGeometry represents a parametric surface using a function that takes in a `u` and `v` value each between 0 and 1.

Any modifications to the properties will update the underlying [`THREE.BufferGeometry`](https://threejs.org/docs/#api/en/core/BufferGeometry).

## Example

  <ClientOnly>
    <ParametricGeometry />
  </ClientOnly>


## Props

| Prop name | Description                                                                                                                                                      | Type           | Default                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------- |
|` name      `| Name of the geometry.                                                                                                                                            | string         | ""                         |
|` function  `| A function that takes in a `u` and `v` value each between 0 and 1 and modifies a third Vector3 argument.<br/>Default is a function that generates a klein bottle | TSFunctionType | ParametricGeometries.klein |
|` slices    `| The count of slices to use for the parametric function.                                                                                                          | number         | 8                          |
|` stacks    `| The count of stacks to use for the parametric function.                                                                                                          | number         | 8                          |

---

