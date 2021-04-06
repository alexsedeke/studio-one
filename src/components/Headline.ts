import { h, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'Headline',
  props: {
    anchor: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 1
    }
  },
  setup(props, context) {
    const { anchor, level } = toRefs(props)
    // Get slot content
    let headlineContent: any = 'Headline'
    if (typeof context?.slots?.default === 'function') {
      headlineContent = context.slots.default()
    }
    // Render the component
    return () => h('div', {
        class: 'block--heading',
        id: anchor.value
      },
      [
        h(`h${level.value.toString()}`, { class: `h h--h${level.value.toString()}`}, [
          h('a', { href: `#${anchor.value}`, class: 'h__anchor' }, headlineContent ),
          h('span', { class: 'h__anchor__indicator' }, ' #')
        ])
      ]
    )
  }
})
