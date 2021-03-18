import { createWebHistory, createRouter } from 'vue-router'
import ComponentsView from '../components/ComponentsView.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'components',
    components: {
      default: ComponentsView
    }
  }, {
    path: '/halo',
    name: 'halo',
    components: {
      default: HelloWorld
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
