# Materials

Material components are simply passed to the corresponding mesh.

## Usage

::: code-group
```vue-html{2} [Mesh]
<Mesh>
  <MeshBasicMaterial color="red" />
  <BoxGeometry />
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

## Available materials

The following materials are supported:

- [LineBasicMaterial](/components/Materials/LineBasicMaterial)
- [LineDashedMaterial](/components/Materials/LineDashedMaterial)
- [MeshBasicMaterial](/components/Materials/MeshBasicMaterial)
- [MeshLambertMaterial](/components/Materials/MeshLambertMaterial)
- [MeshNormalMaterial](/components/Materials/MeshNormalMaterial)
- [PointsMaterial](/components/Materials/PointsMaterial)