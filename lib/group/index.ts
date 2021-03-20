import { App } from 'vue'
import Group from './Group.vue'

Group.install = (Vue: App) => {
  Vue.component(Group.name, Group)
}

export { Group }
