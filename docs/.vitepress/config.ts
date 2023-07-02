import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'

import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const pkg = require('../../package.json')

const testFolder = './docs/components';
import * as fs from "fs";

const links: any[] = []

const componentTree = {
  text: 'Component library',
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
  head: [
    [
      'script',
      // @ts-expect-error
      { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3761845630657739', crossorigin: "anonymous" }
    ],
    [
      'script',
      // @ts-expect-error
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7ZLF9801NT' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-7ZLF9801NT');"
    ]
  ],
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
      { icon: 'github', link: 'https://github.com/janvorisek/drie' },
      { icon: 'twitter', link: 'https://twitter.com/janvorisekdev' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Creating the first scene', link: '/guide/creating-the-first-scene' },
        ]
      },
      {
        text: 'Using components',
        items: [
          { text: 'Geometries', link: '/using-components/geometries'},
          { text: 'Materials', link: '/using-components/materials'},
          { text: 'Objects', link: '/using-components/objects'}
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Performance', link: '/advanced/performance'},
          { text: 'Raycasting', link: '/advanced/raycasting'},
          { text: 'Types', link: '/advanced/types'}
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
          },
          {
            text: 'E-shop product viewer',
            link: '/examples/eshop-product'
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
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },

  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://www.drie.dev/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
  },
  vite: {
    plugins: [vueDocsPlugin()],
  },
})
