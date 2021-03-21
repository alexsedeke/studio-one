<template>
  <div class="app__content-view">
    <h1>Button</h1>
    <div class="example">
      <one-button variant="primary">Primary</one-button>
      <one-button variant="secondary">Secondary</one-button>
      <one-button variant="warning">Warning</one-button>
      <one-button variant="info">Info</one-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ButtonView'
})
</script>

<style lang="postcss" scoped>
.example {
  button {
    margin: 1rem;
  }
}
</style>
