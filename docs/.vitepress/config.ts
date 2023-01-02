import { defineConfig } from 'vitepress'

const pkg = require('../../package.json')

const testFolder = './docs/components';
import * as fs from "fs";

const componentTree = {
  text: 'Components',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'Base', items: [
       { text: 'Renderer', link: '/components/Renderer' },
       { text: 'Scene', link: '/components/Scene' }
      ]
    }
  ]
} as any

fs.readdirSync(testFolder).forEach(file=> {
  if(fs.lstatSync(testFolder + '/' + file).isDirectory())
  {
    const item = {text: file, items: []} as any;
    fs.readdirSync(testFolder + '/' + file).forEach(file2=> {
      const compName = file2.replace('.md', '');
      item.items.push({text: compName, link: 'components/' + file + '/' + compName})
    });
    componentTree.items.push(item);
  }
    
});

const vueDocsPlugin = () => ({
  name: "vue-docs",
  transform(code: any, id: any) {
    if (!/vue&type=docs/.test(id)) return;
    return `export default ''`;
  },
});

export default defineConfig( {
  title: 'Drie',
  description: 'Drie is a Vue 3 component library for THREE.js made with TypeScript and Composition API.',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    nav: [{
      text: pkg.version,
      items: [
        {
          text: 'Issues',
          link: 'https://github.com/janvorisek/drie/issues'
        }
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/janvorisek/drie' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Types', link: '/types'}
        ]
      },
      componentTree,
      {
        text: 'Examples',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Basic setup',
            link: '/examples/basic-setup'
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Jan Vorisek'
    }
    /*editLink: {
      pattern: 'https://github.com/janvorisek/drie/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    }*/
  },
  vite: {
    plugins: [vueDocsPlugin()]
  },
})
