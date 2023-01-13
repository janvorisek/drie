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

Drie is a Vue 3 component library for [`three.js`](https://threejs.org/) inspired by `react-three-fiber` and `TroisJS`. It is made with TypeScript and Composition API.

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
- Simple usage of geometry utilities (see [EdgesGeometry](components/Geometries/EdgesGeometry) or [WireframeGeometry](components/Geometries/WireframeGeometry)

## Authors

<VPTeamMembers size="small" :members="members" />
