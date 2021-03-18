import { createWebHistory, createRouter } from 'vue-router'
import ComponentsView from '../components/ComponentsView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import CompnentOverView from '../components/ComponentOverView.vue'
import ButtonView from '../components/ButtonView.vue'
import BarView from '../components/BarView.vue'

const routes = [
  {
    path: '/components',
    name: 'components',
    components: {
      default: ComponentsView
    },
    children: [
      { path: '', name: 'components-list', component: CompnentOverView },
      { path: 'button', name: 'components-button', component: ButtonView },
      { path: 'bar', name: 'components-bar', component: BarView }
    ]
  }, {
    path: '/',
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
