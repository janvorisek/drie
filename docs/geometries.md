# Geometries

Geometry components are simply passed to the corresponding mesh.

::: code-group
```vue-html{3} [Mesh]
<Mesh>
  <MeshBasicMaterial color="red" />
  <BoxGeometry />
</Mesh>
```

```vue-html{3} [Points]
<Points>
  <PointsMaterial color="blue" />
  <SphereGeometry />
</Points>
```

```vue-html{3} [LineSegments]
<LineSegments>
  <LineBasicMaterial color="black" />
  <PlaneGeometry />
</LineSegments>
```
:::

The following geometries are supported:

- [BoxGeometry](components/Geometries/BoxGeometry)
- [PlaneGeometry](components/Geometries/PlaneGeometry)
- [SphereGeometry](components/Geometries/SphereGeometry)

Some utility geometries are supported as well:

- [EdgesGeometry](components/Geometries/EdgesGeometry)
- [WireframeGeometry](components/Geometries/WireframeGeometry)

General [BufferGeometry](/components/Geometries/BufferGeometry) is available with reactive vertices/faces support.