<template>
  <div class="page-grid">
    <div class="page-grid__sidebar">
      <one-bar resizer="e" class="components-view__menu">
        <!-- component group -->
        <one-group title="Components">
            <one-list-item :active="isActive('components-bar')">
              <router-link :to="{ name: 'components-bar' }">Bar</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-button')">
              <router-link :to="{ name: 'components-button' }">Button</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-group')">
              <router-link :to="{ name: 'components-group' }">Group</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-list')">
              <router-link :to="{ name: 'components-list' }">List</router-link>
            </one-list-item>
        </one-group>
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
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ComponentsView',
  setup() {
    const route = useRoute()
    const isActive = (routeName: String) => {
      return (route.name === routeName)
    }
    return { 
      isActive
    }
  }
})
</script>
