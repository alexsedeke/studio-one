import { createApp } from 'vue'
import studioOne from '../lib/entry.esm'
import router from './router'
import App from './App.vue'

// import '../node_modules/highlight.js/styles/a11y-dark.css'
import '../node_modules/highlight.js/styles/xcode.css'
import '../lib/style.css'
import './styles/app.css'

createApp(App)
  .use(router)
  .use(studioOne).mount('#app')
