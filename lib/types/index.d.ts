declare module "studio-one" {
  import { PluginFunction } from "vue"
  export type ResizerKeyType = 'n' | 'e' | 's' | 'w'

  export const install: PluginFunction<never>;
}
