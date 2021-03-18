<template>
  <div class="page-grid">
    <div class="page-grid__sidebar">
      <one-bar resizer="e" class="components-view__menu">
        <h3>Components</h3>
        <ul>
          <li><router-link :to="{ name: 'components-bar' }">Bar</router-link></li>
          <li><router-link :to="{ name: 'components-button' }">Button</router-link></li>
        </ul>
      </one-bar>
    </div>
    <div class="page-grid__header">
      header
    </div>
    <div class="page-grid__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentsView'
})
</script>
