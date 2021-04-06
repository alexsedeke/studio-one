import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import brandRoutes from './brand'
import systemRoutes from './system'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView
    }
  },
  ...brandRoutes,
  ...systemRoutes
]

const router = createRouter({
  history: createWebHistory('/studio-one/'),
  routes
})

export default router
