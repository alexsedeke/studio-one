<template>
  <div class="app__view app__view--center">
    <div>
      <app-logo class="logo--custom"></app-logo>
      <router-link :to="{ name: 'components' }">Components</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from './AppLogo.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    AppLogo
  }
})
</script>

<style lang="postcss">
.logo--custom {
  font-size: 8rem;
}
</style>
