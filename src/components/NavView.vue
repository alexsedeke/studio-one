<template>
  <div class="doc__view">
    <h1 class="doc__headline">Nav</h1>
    <p class="doc__introduction">
      Use Studio One custom <strong>one-nav</strong> component for actions in forms, dialogs, and more.<br>
      Includes support for a handful of contextual variations, sizes, states, and more.
    </p>
    <hr>
    <div class="doc__presentation">
      <h2 class="doc__headline">Presentation</h2>
      <h3>Simple test</h3>
      <p>Description for simple test</p>
      <div class="doc__example">
        <one-nav class="one-nav--center">
          <one-navitem @onClick="activateItem('test1')" :active="isActive('test1')">Test 1</one-navitem>
          <one-navitem @onClick="activateItem('test2')" :active="isActive('test2')">Test 2</one-navitem>
          <one-navitem @onClick="activateItem('test3')" :active="isActive('test3')">Test 3</one-navitem>
        </one-nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'NavView',
  setup() {
    const activeItem = ref<String>('test1')
    const activateItem = (item: String) => {
      activeItem.value = item
    }
    const isActive = (item: String) => (item === activeItem.value)

    return {
      activateItem, isActive
    }
  }
})
</script>
