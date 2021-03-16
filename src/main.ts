import { createApp } from 'vue'
import One from '../lib/main'
import App from './App.vue'

import '../lib/styles/index.css'
import './styles/app.css'

createApp(App).use(One).mount('#app')
