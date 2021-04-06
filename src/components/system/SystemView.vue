<template>
  <div class="page-grid">
    <div class="page-grid__sidebar page-grid--scrollauto">
      <one-bar resizer="e" class="components-view__menu">
        <app-logo class="components-view__logo" />
        <!-- components group -->
        <one-group title="Components">
          <one-list>
            <one-list-item :active="isActive('components-overview')">
              <router-link :to="{ name: 'components-overview' }">Overview</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-bar')">
              <router-link :to="{ name: 'components-bar' }">Bar</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-button')">
              <router-link :to="{ name: 'components-button' }">Button</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-group')">
              <router-link :to="{ name: 'components-group' }">Group</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-nav')">
              <router-link :to="{ name: 'components-nav' }">Nav</router-link>
            </one-list-item>
            <one-list-item :active="isActive('components-list')">
              <router-link :to="{ name: 'components-list' }">List</router-link>
            </one-list-item>
          </one-list>
        </one-group>
        <!-- CSS group -->
        <one-group title="CSS">
          <one-list>
            <one-list-item :active="isActive('css-overview')">
              <router-link :to="{ name: 'css-overview' }">Overview</router-link>
            </one-list-item>
          </one-list>
        </one-group>
      </one-bar>
    </div>
    <div class="page-grid__content page-grid--scrollauto">
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from '../AppLogo.vue'

export default defineComponent({
  name: 'SystemView',
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
