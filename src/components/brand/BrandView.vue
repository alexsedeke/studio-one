<template>
  <div class="page-grid">
    <div class="page-grid__sidebar page-grid--scrollauto">
      <sto-bar resizer="e" class="components-view__menu">
        <app-logo class="components-view__logo" />
        <!-- components group -->
        <sto-group title="Brand">
          <sto-list>
            <sto-list-item :active="isActive('brand-overview')">
              <router-link :to="{ name: 'brand-overview' }">Overview</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('brand-colorpalette')">
              <router-link :to="{ name: 'brand-colorpalette' }">Color Palette</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('brand-typography')">
              <router-link :to="{ name: 'brand-typography' }">Typography</router-link>
            </sto-list-item>
          </sto-list>
        </sto-group>
      </sto-bar>
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
