# Geometries

Geometry components are simply passed to the corresponding Object3D.

## Usage

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

## Available geometries

General [BufferGeometry](/components/Geometries/BufferGeometry) is available with reactive vertices, faces and uvs support. The props are passed as flat arrays.

The following basic geometries are supported:

- [BoxGeometry](/components/Geometries/BoxGeometry)
- [CircleGeometry](/components/Geometries/CircleGeometry)
- [ConeGeometry](/components/Geometries/ConeGeometry)
- [CylinderGeometry](/components/Geometries/CylinderGeometry)
- [PlaneGeometry](/components/Geometries/PlaneGeometry)
- [RingGeometry](/components/Geometries/RingGeometry)
- [SphereGeometry](/components/Geometries/SphereGeometry)

Some utility geometries are supported as well:

- [EdgesGeometry](/components/Geometries/EdgesGeometry)
- [WireframeGeometry](/components/Geometries/WireframeGeometry)

Additional geometries are implemented:
- [ParametricGeometry](/components/Geometries/ParametricGeometry)
