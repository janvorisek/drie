<script setup>
import Test from './examples/Welcome.vue'

import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/26581833',
    name: 'Jan Vorisek',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/janvorisek' },
      { icon: 'twitter', link: 'https://twitter.com/janvorisekdev' },
    ]
  },
  
]
</script>

# Drie

Drie is a Vue 3 component library that makes it easy for developers to add 3D rendering to their web applications using the [`three.js`](https://threejs.org/) library. It's written in TypeScript and uses the Composition API.

Drie allows for an intuitive and declarative approach to building complex 3D scenes and integrating them into both existing and new Vue projects. Drie aims to be the go-to choice for building 3D web applications with Vue and three.js.

To start using Drie see the [Getting started](/getting-started) page.

## Example

Use mouse or touch to rotate the scene. This example illustrates capabilities of Drie.

<ClientOnly>
<Test />
</ClientOnly>

## Features

Drie implements components for the common three.js classes. Some additional features not directly implemented in three.js are available as well.

Notable features include:

- Auto resizing of WebGL canvas (including PerspectiveCamera aspect ratio update)
- Raycasting as mouse events
- FPS Limiter
- Simple usage of geometry utilities (see [EdgesGeometry](components/Geometries/EdgesGeometry) or [WireframeGeometry](components/Geometries/WireframeGeometry))
- Simple geometries (e.g., [BoxGeometry](components/Geometries/BoxGeometry)) have reactive properties. Drie handles regeneration of the geometry internally.

## Authors

<VPTeamMembers size="small" :members="members" />
