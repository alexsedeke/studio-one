import Button from './components/button'
import { App } from 'vue'

import './styles/index.css'

const components = {
  Button
}

function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as Button } from './components/button'
