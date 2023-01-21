import DefaultTheme from 'vitepress/theme'
import './custom.css'

import LiveCodeBlock from '../../LiveCodeBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('LiveCodeBlock', LiveCodeBlock)
  }
}