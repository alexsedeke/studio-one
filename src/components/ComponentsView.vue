<template>
  <div class="page-grid">
    <div class="page-grid__sidebar">
      <one-bar resizer="e">sonething</one-bar>
    </div>
    <div class="page-grid__toolbar">
      <one-bar resizer="w">more</one-bar>
    </div>
    <div class="page-grid__header">header</div>
    <div class="page-grid__content">content</div>
    <div class="page-grid__footer">footer</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentsView'
})
</script>
