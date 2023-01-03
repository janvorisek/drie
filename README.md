[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<div align="center">
  <h1 align="center">Drie</h1>

  Drie is a Vue 3 component library for [`three.js`](https://threejs.org/) inspired by `react-three-fiber` and `TroisJS`. It is made with TypeScript and Composition API.

  <p align="center">
    <br />
    <a href="https://www.drie.dev"><strong>Explore the docs</strong></a>
    <br />
    <br />
    <a href="https://www.drie.dev/#example">View Demo</a>
    ·
    <a href="https://github.com/janvorisek/drie/issues">Report Bug</a>
    ·
    <a href="https://github.com/janvorisek/drie/issues">Request Feature</a>
  </p>

  [![Drie screenshot][product-screenshot]](https://www.drie.dev)
</div>

## Getting started

### Installation

Drie can be installed from npm and always supports the latest `three.js` version.

Note that you are supposed to install `three.js` yourself.

```shell
npm install @janvorisek/drie three #latest Drie & three.js
```

### Usage

The preffered way is to import the components as needed in the single file components.

```ts
<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie"; // always needed
import { Mesh, BoxGeometry, MeshBasicMaterial } from "@janvorisek/drie"; // mesh
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie"; // camera
</script>
```
```html
<template>
  <div class="example">
    <Renderer ref="renderer" :antialias="true">
      <PerspectiveCamera :up="[0, 0, 1]">
        <OrbitControls />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <Mesh>
          <MeshBasicMaterial color="blue" />
          <BoxGeometry :width="15" :height="10 " />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>
```

### Vue 3 plugin

You can use Vue3 plugin to auto-import all the components.

Note that tree shaking is not available and the resulting bundle size may be huge.

```ts
import { createApp } from "vue";
import { install as installDrie } from 'drie';
import App from "./App.vue";

const app = createApp(App);
installDrie(app);
app.mount("#app");
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/janvorisek/drie.svg?style=for-the-badge
[contributors-url]: https://github.com/janvorisek/drie/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/janvorisek/drie.svg?style=for-the-badge
[forks-url]: https://github.com/janvorisek/drie/network/members
[stars-shield]: https://img.shields.io/github/stars/janvorisek/drie.svg?style=for-the-badge
[stars-url]: https://github.com/janvorisek/drie/stargazers
[issues-shield]: https://img.shields.io/github/issues/janvorisek/drie.svg?style=for-the-badge
[issues-url]: https://github.com/janvorisek/drie/issues
[license-shield]: https://img.shields.io/github/license/janvorisek/drie.svg?style=for-the-badge
[license-url]: https://github.com/janvorisek/drie/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## Contact

Jan Vorisek - [@janvorisekdev](https://twitter.com/janvorisekdev) - jan@vorisek.me

Project Link: [https://github.com/janvorisek/drie](https://github.com/janvorisek/drie)
