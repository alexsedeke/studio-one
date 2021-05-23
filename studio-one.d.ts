import { DefineComponent, Plugin } from 'vue';


declare const StudioOne: Exclude<Plugin['install'], undefined>;
export default StudioOne;

export const StoBar: DefineComponent<{}, {}, any>;
export const StoButton: DefineComponent<{}, {}, any>;
export const StoGroup: DefineComponent<{}, {}, any>;
export const StoList: DefineComponent<{}, {}, any>;
export const StoListItem: DefineComponent<{}, {}, any>;
export const StoNav: DefineComponent<{}, {}, any>;
