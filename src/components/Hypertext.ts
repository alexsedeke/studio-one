import { h, defineComponent, toRefs, watch, compile } from 'vue'

export default defineComponent({
  name: 'hypertext',
  props: {
    html: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { html } = toRefs(props)
    let lastSuccessCompile = h(compile('<span>code preview</span>'))
    /** compile code */
    const getCompiled = (sourceToCompile: string | HTMLElement) => {
      try {
        const result = compile(sourceToCompile)
        const rendered = h(result)
        lastSuccessCompile = rendered
        return rendered
      } catch (compileError) {
        console.error('Vue Compile error.')
        return lastSuccessCompile
      }
    }

    let compiledTemplate = getCompiled(html.value)
    
    watch(html, (currentValue) => {
      compiledTemplate = getCompiled(currentValue)
    })
    // Please note that we need to explicitly expose ref value here
    return () => compiledTemplate
  }
})
