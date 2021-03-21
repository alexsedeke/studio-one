declare module "studio-one" {
  import { PluginFunction } from "vue"
  export type ResizerKeyType = 'n' | 'e' | 's' | 'w'
  export type SizeType = 'xs' | 'sm' | 'md' | 'lg'

  export const install: PluginFunction<never>;
}
