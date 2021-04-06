import SystemView from '../components/system/SystemView.vue'
import SystemOverviewView from '../components/system/SystemOverviewView.vue'
import ButtonView from '../components/system/button/ButtonView.vue'
import BarView from '../components/system/bar/BarView.vue'
import ListView from '../components/system/list/ListView.vue'
import GroupView from '../components/system/group/GroupView.vue'
import NavView from '../components/system/nav/NavView.vue'
import CSSView from '../components/css/CssOverviewView.vue'

const routes = [
  {
    path: '/system',
    name: 'system',
    redirect: { name: 'components-overview' },
    components: {
      default: SystemView
    },
    children: [
      { 
        path: 'overview',
        name: 'components-overview',
        component: SystemOverviewView
      },
      {
        path: 'button',
        name: 'components-button',
        component: ButtonView
      },
      {
        path: 'bar',
        name: 'components-bar',
        component: BarView
      },
      {
        path: 'list',
        name: 'components-list',
        component: ListView
      },
      {
        path: 'group',
        name: 'components-group',
        component: GroupView
      },
      {
        path: 'nav',
        name: 'components-nav',
        component: NavView
      },
      {
        path: 'css',
        name: 'css-overview',
        component: CSSView
      }
    ]
  }
]

export { routes as default }
