import Vue from 'vue'
declare module '*.vue' {
  import { DefineComponent, PluginFunction } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
