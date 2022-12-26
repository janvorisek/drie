import { defineConfig } from 'vitepress'

const testFolder = './docs/components';
import * as fs from "fs";

const componentTree = {
  text: 'Components',
  items: [{text: 'Base', items: [{text: 'Renderer', link: '/components/Renderer'}]}]
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
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          
        ]
      },
      componentTree
    ]
  },
  vite: {
    plugins: [vueDocsPlugin()]
  }
})
