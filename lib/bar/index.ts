import { App } from 'vue'
import Bar from './Bar.vue'

Bar.install = (Vue: App) => {
  Vue.component(Bar.name, Bar)
}

export { Bar }
