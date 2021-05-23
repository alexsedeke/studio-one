<template>
  <div class="page-grid">
    <div class="page-grid__sidebar page-grid--scrollauto">
      <sto-bar resizer="e" class="components-view__menu">
        <app-logo class="components-view__logo" />
        <!-- components group -->
        <sto-group title="Components">
          <sto-list>
            <sto-list-item :active="isActive('components-overview')">
              <router-link :to="{ name: 'components-overview' }">Overview</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('components-bar')">
              <router-link :to="{ name: 'components-bar' }">Bar</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('components-button')">
              <router-link :to="{ name: 'components-button' }">Button</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('components-group')">
              <router-link :to="{ name: 'components-group' }">Group</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('components-nav')">
              <router-link :to="{ name: 'components-nav' }">Nav</router-link>
            </sto-list-item>
            <sto-list-item :active="isActive('components-list')">
              <router-link :to="{ name: 'components-list' }">List</router-link>
            </sto-list-item>
          </sto-list>
        </sto-group>
        <!-- CSS group -->
        <sto-group title="CSS">
          <sto-list>
            <sto-list-item :active="isActive('css-overview')">
              <router-link :to="{ name: 'css-overview' }">Overview</router-link>
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
