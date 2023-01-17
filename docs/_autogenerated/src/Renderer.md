# Renderer

## Props

| Prop name        | Description                                                             | Type           | Values | Default     |
| ---------------- | ----------------------------------------------------------------------- | -------------- | ------ | ----------- |
| camera           | Name of the active camera when using multiple cameras.                  | string         | -      |             |
| autoResize       | Flag marking whether renderer auto resizes to match parent dimensions.  | boolean        | -      | true        |
| onBeforeRender   | Callback to fire before each animation frame is rendered.               | TSFunctionType | -      | () =&gt; {} |
| antialias        | Whether to perform antialiasing.                                        | boolean        | -      | false       |
| frameLimit       | Set FPS limit for the renderer.<br/>Use `-1` to disable frame limitter. | number         | -      | 60          |
| alpha            | Controls the default clear alpha value.                                 | boolean        | -      | false       |
| shadowMapEnabled | If set, use shadow maps in the scene.                                   | boolean        | -      | false       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

BEGIN_DOCS
This component manages [`THREE.WebGLRenderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer). It is the main component containing cameras and scenes.

## Features

Drie provides some of the common features not contained in three.js by default.

### Renderer auto resize

Modern web is based on complex responsive layouts. Drie allows you to make your renderer canvas responsive. It is based on ResizeObserver watching renderer's parent element dimensions.

It can be disabled using the `autoResize` prop. When disabled, you are required to provide `width` and`height` prop.

### Frame limiter

Frame limiter may increase performance of your scenes. The limit defaults to `60` FPS.

It can be disabled by setting the `frameLimit` prop to `-1`.
