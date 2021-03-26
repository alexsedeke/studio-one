<template>
  <nav class="one-nav">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
  name: 'one-nav',
})
</script>
