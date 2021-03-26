<template>
  <button type="button" :disabled="disabled" class="one-nav__item">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
  name: 'one-nav-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
