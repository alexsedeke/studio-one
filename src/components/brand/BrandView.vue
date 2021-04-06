<template>
  <div class="page-grid">
    <div class="page-grid__sidebar page-grid--scrollauto">
      <one-bar resizer="e" class="components-view__menu">
        <app-logo class="components-view__logo" />
        <!-- components group -->
        <one-group title="Brand">
          <one-list>
            <one-list-item :active="isActive('brand-overview')">
              <router-link :to="{ name: 'brand-overview' }">Overview</router-link>
            </one-list-item>
            <one-list-item :active="isActive('brand-colorpalette')">
              <router-link :to="{ name: 'brand-colorpalette' }">Color Palette</router-link>
            </one-list-item>
            <one-list-item :active="isActive('brand-typography')">
              <router-link :to="{ name: 'brand-typography' }">Typography</router-link>
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
