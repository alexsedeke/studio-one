<template>
  <button
    ref="navElement"
    type="button"
    class="one-nav__item"
    :class="{ 'one-nav__item--active': active }"
    :disabled="disabled"
    @click.stop="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'one-nav-item',
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
  setup(props, { emit }) {
    const navElement = ref<HTMLElement | null>(null)
    const onClick = () => emit('onClick')

    return { 
      onClick, navElement
    }
  }
})
</script>
