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
        <one-nav>
          <one-nav-item>Test 1</one-nav-item>
          <one-nav-item>Test 2</one-nav-item>
          <one-nav-item>Test 3</one-nav-item>
        </one-nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavView'
})
</script>
