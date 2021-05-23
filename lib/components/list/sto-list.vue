<template>
  <ul class="sto-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
  name: 'sto-list',
})
</script>
