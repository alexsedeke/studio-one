import { App } from 'vue'
import Nav from './Nav.vue'
import NavItem from './NavItem.vue'

Nav.install = (Vue: App) => {
  Vue.component(Nav.name, Nav)
}

NavItem.install = (Vue: App) => {
  Vue.component(NavItem.name, NavItem)
}

export { Nav, NavItem }
