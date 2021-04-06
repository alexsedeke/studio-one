import BrandView from '../components/brand/BrandView.vue'
import BrandOverviewView from '../components/brand/BrandOverviewView.vue'
import ColorpaletteView from '../components/brand/ColorpaletteView.vue'
import TypographyView from '../components/brand/TypographyView.vue'

const routes = [
  {
    path: '/brand',
    name: 'brand',
    redirect: { name: 'brand-overview' },
    components: {
      default: BrandView
    },
    children: [
      { 
        path: 'overview',
        name: 'brand-overview',
        component: BrandOverviewView
      },
      {
        path: 'colorpalette',
        name: 'brand-colorpalette',
        component: ColorpaletteView
      },
      {
        path: 'typography',
        name: 'brand-typography',
        component: TypographyView
      }
    ]
  }
]

export { routes as default }
