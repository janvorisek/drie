# Materials

Material components are simply passed to the corresponding mesh.

::: code-group
```vue-html{2} [Mesh]
<Mesh>
  <MeshBasicMaterial color="red" />
  <CubeGeometry />
</Mesh>
```

```vue-html{2} [Points]
<Points>
  <PointsMaterial color="blue" />
  <SphereGeometry />
</Points>
```

```vue-html{2} [LineSegments]
<LineSegments>
  <LineBasicMaterial color="black" />
  <PlaneGeometry />
</LineSegments>
```
:::

The following materials are supported:

- [LineBasicMaterial](components/Materials/LineBasicMaterial)
- [MeshBasicMaterial](components/Materials/MeshBasicMaterial)
- [MeshLambertMaterial](components/Materials/MeshLambertMaterial)
- [MeshNormalMaterial](components/Materials/MeshNormalMaterial)
- [PointsMaterial](components/Materials/PointsMaterial)