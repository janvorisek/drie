# Creating the first scene

The goal of this section is to setup your first sene using Drie.

## Renderer, scene and camera

To actually be able to display anything with three.js, we need three things:

- renderer - this is where the magic happens
- scene - to place your amazing models, lights etc.
- camera - so that we can render the scene with camera

In plain three.js you would need to write something like

```ts
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

Our renderer will handle management of the `THREE.WebGLRenderer` and its HTML canvas element for you.

The renderer is a mandatory parent component for any 3D rendering with Drie.

```vue
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer>
      <PerspectiveCamera :position="[1, 1, 1]" :up="[0, 0, 1]" />
      <Scene background="#f9f9f9">
        <!-- We will place some amazing models here-->
      </Scene>
    </Renderer>
  </div>
</template>
```

Drie automatically resizes the renderer canvas to it's parent element dimensions. In our example this is equal to the window width and height. This behavior can be disabled, so that you can maintain the dimensions manually.

## Adding objects

The following code could be used to add a simple green cube to the scene in three.js.

```ts
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

In Drie this can be achieved by passing a mesh component with a corresponding geometry and material into the scene component.

```vue{5-10}
<template>
  <div style="width: 100vh; height: 100vh;">
    <Renderer>
      <PerspectiveCamera :position="[1, 1, 1]" :up="[0, 0, 1]" />
      <Scene background="#f9f9f9">
        <Mesh>
          <BoxGeometry :width="1" :height="1" :depth="1" />
          <MeshBasicMaterial color="#00ff00" />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>
```

See basic [working example](/examples/basic-setup) for more information.