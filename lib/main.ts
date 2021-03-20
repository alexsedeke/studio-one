import { Button } from './button'
import { Bar } from './bar'
import { Group } from './group'
import { List, ListItem } from './list'
import { App } from 'vue'
import './styles/index.css'

const components = [
  Button, Bar, Group, List, ListItem
]

export default {
  install: (Vue: App) => {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}

export { Button } from './button'
export { Bar } from './bar'
export { Group } from './group'
export { List, ListItem } from './list'
