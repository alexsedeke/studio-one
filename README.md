# Studio One

Studio One is a UI Component Library for Vue 3.
The actual state is under development and actually unstable.
[Studio One](https://alexandervu.github.io/studio-one/)

## Components

### Builds

There are two builds available.

* `dist/studio-one.udm.js`: (UMD) UMD stands for Universal Module Definition
* `dist/studio-one.es.js`: (ESM) ESM stands for ES Modules

Type definitions are also included.
Generally your build tool will be able to figure out which bundle to use, but you can be explicit if you need to.

### Build Type descriptions

#### UMD

UMD stands for Universal Module Definition. Here is what it may look like:

```javascript
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory)
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"))
    } else {
        root.Requester = factory(root.$, root._)
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... }

    return Requester
}))
```

* Works on front and back end _(hence the name universal)_.
* Unlike CJS or AMD, UMD is more like a pattern to configure several module systems.
* UMD is usually used as a fallback module when using bundler like Rollup/ Webpack.

#### ESM

ESM stands for ES Modules. It is Javascript's proposal to implement a standard module system. I am sure many of you have seen this:

```javascript
import React from 'react'
import { App } from 'vue'
```

* Works in many [modern browsers](https://caniuse.com/#feat=es6-module)
* It has the best of both worlds: CJS-like simple syntax and AMD's async
* [Tree-shakeable](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/), due to ES6's [static module structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
* ESM allows bundlers like Rollup to [remove unnecessary code](https://dev.to/bennypowers/you-should-be-using-esm-kn3), allowing sites to ship less codes to get faster load.
* Can be called in HTML, just do:

```html
<script type="module">
  import {func1} from 'my-lib'

  func1()
</script>
```

This may not work 100% in all browsers yet.
For more information refer please to this [article](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm).

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"
