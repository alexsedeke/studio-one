<template>
  <div
    :class="cssClass"
    :tabindex="tabindex"
    @click.stop="onClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import  { toRefs, computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'one-button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: [Number]
    }
  },
  setup(props, { emit }) {
    const { variant, size, disabled } = toRefs(props)
    const onClick = () => emit('onClick')
    const cssClass = computed(() => {
      let cssClassList = ['one-button']
      // Set variant class
      if (variant.value.length) {
        const variants = variant.value.split(' ').map(element => `one-button--${element.toLowerCase()}`)
        cssClassList = cssClassList.concat(variants)
      }
      // Set size class
      if (size.value.length) {
        cssClassList.push(`one-button--size-${size.value.toLowerCase()}`)
      }
      return cssClassList.join(' ')
    })

    return {
      variant,
      disabled,
      cssClass,
      onClick
    }
  }
})
</script>
