<template>
  <div class="page-grid">
    <div class="page-grid__sidebar">
      <one-bar resizer="e" class="components-view__menu">
        <app-logo class="components-view__logo" />
        <!-- component group -->
        <one-group title="Components">
          <one-list>
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
          </one-list>
        </one-group>
      </one-bar>
    </div>
    <div class="page-grid__header">
      <one-bar class="components-view__navigation">Header</one-bar>
    </div>
    <div class="page-grid__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'

export default defineComponent({
  name: 'ComponentsView',
  components: {
    AppLogo
  },
  setup() {
    const currentRouteName = ref<String>('')
    const route = useRoute()

    const isActive = (routeName: String) => {
      return (currentRouteName.value === routeName)
    }

    watch(() => route.name, (currentValue) => {
      if (typeof currentValue === 'string') {
        currentRouteName.value = currentValue
      }
    })

    onMounted(() => {
      if (typeof route.name === 'string') {
        currentRouteName.value = route.name
      }
    })

    return { 
      isActive
    }
  }
})
</script>
