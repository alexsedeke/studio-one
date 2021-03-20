import { App } from 'vue'
import List from './List.vue'
import ListItem from './ListItem.vue'

List.install = (Vue: App) => {
  Vue.component(List.name, List)
}

ListItem.install = (Vue: App) => {
  Vue.component(ListItem.name, ListItem)
}

export { List, ListItem }
