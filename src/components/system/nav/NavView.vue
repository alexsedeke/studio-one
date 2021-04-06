<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Nav</h1>
    </header>
    <div class="block block--text">
      <p class="block--introduction">
        Use Studio One <strong>one-nav</strong> component for ...
      </p>
    </div>
    <!-- EXAMPLES -->
    <Headline anchor="examples" :level="2">Examples</Headline>
    <!-- EXAMPLES::basic usage -->
    <Headline anchor="basic" :level="3">Basic Usage</Headline>
    <div class="block block--text">
      <p>
        Description for simple test.
      </p>
    </div>
    <div class="example">
      <div class="example__presentation">
        <one-nav class="one-nav--center">
          <one-nav-item @onClick="activateItem('test1')" :active="isActive('test1')">Test 1</one-nav-item>
          <one-nav-item @onClick="activateItem('test2')" :active="isActive('test2')">Test 2</one-nav-item>
          <one-nav-item @onClick="activateItem('test3')" :active="isActive('test3')">Test 3</one-nav-item>
        </one-nav>
      </div>
      <div class="example__snippet">
        <div class="example__snippet__title">Source</div>
        <pre><code
          class="html"
          contenteditable="true">&lt;one-nav class="one-nav--center"&gt;
  &lt;one-nav-item @onClick="activateItem('test1')" :active="isActive('test1')"&gt;Test 1&lt;/one-nav-item&gt;
  &lt;one-nav-item @onClick="activateItem('test2')" :active="isActive('test2')"&gt;Test 2&lt;/one-nav-item&gt;
  &lt;one-nav-item @onClick="activateItem('test3')" :active="isActive('test3')"&gt;Test 3&lt;/one-nav-item&gt;
&lt;/one-nav&gt;</code></pre>
      </div>
    </div>
    <!-- EXAMPLES::test -->
    <Headline anchor="variants" :level="3">Placeholder example</Headline>
    <div class="block block--text">
      <p>
        Placeholder example description. 
      </p>
    </div>
    <div class="block block--example"> 
      <Example :source="exampleTest" language="html"></Example>
    </div>
    <!-- API -->
    <Headline anchor="reference" :level="2">Component reference</Headline>
    <!-- API::properties -->
    <Headline anchor="properties" :level="3">Properties</Headline>
    <div class="block block--table">
      <table class="one-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="component">
            <td class="component__property">property name</td>
            <td class="component__type">String</td>
            <td class="component__default">none</td>
            <td class="component__description">Short description.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- API::events -->
    <Headline anchor="events" :level="3">Events</Headline>
    <div class="block block--table">
      <table class="one-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Arguments</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="component">
            <td class="component__property">Event name</td>
            <td class="component__type">Arguments, mostly event object</td>
            <td class="component__description">Short description.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- API::slots -->
    <Headline anchor="slots" :level="3">Slots</Headline>
    <div class="block block--table">
      <table class="one-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="component">
            <td class="component__property">default</td>
            <td class="component__description">Content to place in the button.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import exampleTest from './exampleTest'
import Example from '../../Example.vue'
import Headline from '../../Headline'

export default defineComponent({
  name: 'NavView',
  components: {
    Headline, Example
  },
  setup() {
    const activeItem = ref<String>('test1')
    const activateItem = (item: String) => {
      activeItem.value = item
    }
    const isActive = (item: String) => (item === activeItem.value)

    return {
      activateItem, isActive, exampleTest
    }
  }
})
</script>

