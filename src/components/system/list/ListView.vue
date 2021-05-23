<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">List</h1>
    </header>
    <div class="block block--text">
      <p class="block--introduction">
        Use Studio One <strong>sto-list</strong> component for ...
      </p>
    </div>
    <!-- EXAMPLES -->
    <Headline anchor="examples" :level="2">Examples</Headline>
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
      <table class="sto-table">
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
      <table class="sto-table">
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
      <table class="sto-table">
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
import { defineComponent } from 'vue'
import exampleTest from './exampleTest'
import Example from '../../Example.vue'
import Headline from '../../Headline'

export default defineComponent({
  name: 'ListView',
  components: {
    Headline, Example
  },
  setup() {
    return {
      exampleTest
    }
  }
})
</script>
