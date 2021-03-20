<template>
  <ul class="one-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
  name: 'one-list',
})
</script>
