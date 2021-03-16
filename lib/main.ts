import Button from './button'
import { App } from 'vue'
import './styles/index.css'

const components = {
  Button
}

function install(Vue: App) {
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }
export { default as Button } from './button'
