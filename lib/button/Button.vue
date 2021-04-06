<template>
  <button
    :class="cssClass"
    :tabindex="tabindex"
    @click.stop="onClick">
    <slot></slot>
  </button>
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
    shape: {
      type: String,
      default: 'rounded'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number
    }
  },
  setup(props, { emit }) {
    const { variant, shape, disabled } = toRefs(props)
    const onClick = () => emit('onClick')
    const cssClass = computed(() => {
      let cssClassList = ['one-button']
      const keyvalues = `${variant.value} ${shape.value}`
      const variants = keyvalues.split(' ').map(element => `one-button--${element.toLowerCase()}`)
      return cssClassList.concat(variants).join(' ')
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
