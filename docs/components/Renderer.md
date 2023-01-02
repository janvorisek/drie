# Renderer

## Props

| Prop name        | Description                                                             | Type           | Default     |
| ---------------- | ----------------------------------------------------------------------- | -------------- | ----------- |
|` camera           `| Name of the active camera when using multiple cameras.                  | string         |             |
|` autoResize       `| Flag marking whether renderer auto resizes to match parent dimensions.  | boolean        | true        |
|` onBeforeRender   `| Callback to fire before each animation frame is rendered.               | TSFunctionType | () =&gt; {} |
|` antialias        `| Whether to perform antialiasing.                                        | boolean        | false       |
|` frameLimit       `| Set FPS limit for the renderer.<br/>Use `-1` to disable frame limitter. | number         | 60          |
|` alpha            `| Controls the default clear alpha value.                                 | boolean        | false       |
|` shadowMapEnabled `| If set, use shadow maps in the scene.                                   | boolean        | false       |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
