import Button from './button'
import Bar from './bar'
import { App } from 'vue'
import './styles/index.css'

const components = [
  Button, Bar
]

export default {
  install: (Vue: App) => {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}
export { default as Button } from './button'
export { default as Bar } from './bar'
