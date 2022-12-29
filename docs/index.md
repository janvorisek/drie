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
      { icon: 'twitter', link: 'https://twitter.com/janvorisekdev' }
    ]
  },
  
]
</script>

# Drie

Drie is a Vue 3 component library for THREE.js made with TypeScript and Composition API.

## Example

<ClientOnly>
<Test />
</ClientOnly>

## The Authors

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
