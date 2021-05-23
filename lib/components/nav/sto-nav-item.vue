<template>
  <button
    ref="navElement"
    type="button"
    class="sto-nav__item"
    :class="{ 'sto-nav__item--active': active }"
    :disabled="disabled"
    @click.stop="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'sto-nav-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const navElement = ref<HTMLElement | null>(null)
    const onClick = () => emit('onClick')

    return { 
      onClick, navElement
    }
  }
})
</script>
