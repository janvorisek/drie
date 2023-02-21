<script setup lang="ts">
// Basic example just imports the used Drie components
import { Renderer, Scene } from "../../src"; // always needed
import { GLTFLoader, AmbientLight } from "../../src"; // mesh
import { PerspectiveCamera, OrbitControls } from "../../src"; // camera

import { ref, onMounted } from "vue";

const model = ref(null);

const variants = [
  {
    name: 'Red sofa',
    color: 'red'
  },
  {
    name: 'Yellow sofa',
    color: '#e6e600'
  },
  {
    name: 'Green sofa',
    color: 'green'
  }
];

const activeVariant = ref(variants[0]);

onMounted(() => {
  //console.log();
});

const setVariant = (i) => {
  activeVariant.value = variants[i];
  onLoad();
}

const onLoad = () => {
  if(model.value === null) return;
  const fabric = model.value.three.children[0].children.find(m => m.name === 'SheenChair_fabric');
  fabric.material.color.set(activeVariant.value.color)
}

</script>

<style>
  .eshop-product-viewer {
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #ccc;
  }

  .eshop-product-viewer .renderer {
    width: 100%;
    height: 100%;
  }
  
  .eshop-product-viewer .options {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .eshop-product-viewer .option {
    border-radius: 6px;
    width: 32px;
    height: 32px;
    margin-bottom: 6px;
  }

  .eshop-product-viewer .option:hover {
    cursor: pointer;
  }

  .eshop-product-viewer .option.active {
    border: 2px solid black;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
  }
</style>

# Eshop product viewer

An e-shop 3D product viewer is a feature that allows online shoppers to interact with and view a product in 3D on an e-commerce website. It allows users to rotate and zoom in on the product, giving them a more realistic and detailed view of the item. This can be helpful in making purchasing decisions and can also improve the overall customer experience on the website.

We utilize a [`<GLTFLoader>`](/components/Loaders/GLTFLoader) to load a chair model. A simple variant picker is controlling the color of the chair fabric.

<ClientOnly>
<div class="eshop-product-viewer">
  <div class="renderer">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[0, 2, 2]">
        <OrbitControls :target="[0,0.5,0]" :enable-pan="false" :min-distance="1" :max-distance="5" />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <AmbientLight :position="[0,0,10]" :intensity="1" />
        <GLTFLoader ref="model" @load="onLoad" :scale="[2,2,2]" url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb" />
      </Scene>
    </Renderer>
  </div>
  <div class="options">
    <div v-for="(variant, i) in variants" @click="setVariant(i)" :class="{active: variant.name === activeVariant.name}" class="option" :style="`background: ${variant.color};`" :title="variant.name"></div>
  </div>
</div>
</ClientOnly>

In this example, the scene consists of

- single perspective camera
- orbit controls
- GLTF loader 

## Code

```vue-html
<div class="eshop-product-viewer">
  <div class="renderer">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[0, 2, 2]">
        <OrbitControls
          :target="[0,0.5,0]"
          :enable-pan="false"
          :min-distance="1"
          :max-distance="5"
        />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <AmbientLight :position="[0, 0, 10]" :intensity="1" />
        <GLTFLoader
          ref="model"
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb"
          :scale="[2, 2, 2]"
          @load="onLoad"
        />
      </Scene>
    </Renderer>
  </div>

  <!-- The variant picker -->
  <div class="options">
  <!-- Clicking color variant will trigger mesh material color change -->
    <div
      v-for="(variant, i) in variants"
      @click="setVariant(i)"
      :class="{active: variant.name === activeVariant.name}"
      class="option" :style="`background: ${variant.color};`"
      :title="variant.name"
    ></div>
  </div>
</div>
```

```ts
import { Renderer, Scene } from "@janvorisek/drie";
import { GLTFLoader, AmbientLight } from "@janvorisek/drie";
import { PerspectiveCamera, OrbitControls } from "@janvorisek/drie";

import { ref, onMounted } from "vue";

// reference to the GLTFLoader component
const model = ref(null);

// Variants for the color picker
const variants = [
  {
    name: 'Red sofa',
    color: 'red'
  },
  {
    name: 'Yellow sofa',
    color: '#e6e600'
  },
  {
    name: 'Green sofa',
    color: 'green'
  }
];

// reference to the active variant
const activeVariant = ref(variants[0]);

// method called by clicking the color button
const setVariant = (i) => {
  activeVariant.value = variants[i];
  onLoad();
}

// method called when glTF loaded and whenever color variant is pressed
const onLoad = () => {
  if(model.value === null) return;
  
  // In our case the fabric mesh has a name 'SheenChair_fabric' (in the glTF file)
  // fabricMesh is instance of THREE.Mesh
  const fabricMesh = model.value.three.children[0].children.find(m => m.name === 'SheenChair_fabric');

  // fabricMesh.material is instance of THREE.Material
  fabricMesh.material.color.set(activeVariant.value.color)
}
```

```css
<style>
  .eshop-product-viewer {
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #ccc;
  }

  .eshop-product-viewer .renderer {
    width: 100%;
    height: 100%;
  }
  
  .eshop-product-viewer .options {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .eshop-product-viewer .option {
    border-radius: 6px;
    width: 32px;
    height: 32px;
    margin-bottom: 6px;
  }

  .eshop-product-viewer .option:hover {
    cursor: pointer;
  }

  .eshop-product-viewer .option.active {
    border: 2px solid black;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
  }
</style>
```