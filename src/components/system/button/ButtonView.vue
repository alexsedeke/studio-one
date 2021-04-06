<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Button</h1>
    </header>
    <div class="block block--text">
      <p class="block--introduction">
        Use Studio One custom <strong>one-button</strong> component for actions in forms, dialogs, and more.<br>
        Includes support for a handful of contextual variations, sizes, shapes, and more.
      </p>
    </div>
    <!-- EXAMPLES -->
    <Headline anchor="examples" :level="2">Examples</Headline>
    <!-- EXAMPLES::variant -->
    <Headline anchor="variants" :level="3">Variants</Headline>
    <div class="block block--text">
      <p>
        The appearance of the component can be defined using the variant property. There are some predefined variants like 
        <strong>primary</strong>, <strong>secodary</strong>, <strong>success</strong>, <strong>warning</strong>, <strong>danger</strong> and <strong>info</strong>, as well as all these variants as outline, 
        <strong>outline-primary</strong>, <strong>outline-secodary</strong>, <strong>outline-success</strong>, <strong>outline-warning</strong>, <strong>outline-danger</strong> and <strong>outline-info</strong>.<br>
        Variant are a substitute for predefined CSS classes. If a non-predefined variant is entered, nothing happens because the css class predefined for it was not found.
        Variants can be expanded from. A CSS class must be created for this, which follows the following pattern: <strong>'one-button--&lt;variant&gt;'</strong>. 
      </p>
    </div>
    <div class="block block--example"> 
      <Example :source="variantExample" language="html"></Example>
    </div>
    <!-- EXAMPLES::shape -->
    <Headline anchor="shapes" :level="3">Shapes</Headline>

    <div class="block block--text">
      <p>
        The shape appearance of the component can be defined using the shape property. As with the variant property, the shape property also has predefined values. 
        These are <strong>pill</strong>, <strong>squared</strong> and <strong>rounded</strong>, whereby <strong>rounded</strong> is the default.<br>
        As Variants, shapes are a substitute for predefined CSS classes. If a non-predefined variant is entered, the button gets slightly soft corners. These are predefined in the basic class. 
        Also shapes can be expanded from. A CSS class must be created for this, which follows the following pattern: <strong>'one-button--&lt;shape&gt;'</strong>. 
      </p>
    </div>

    <div class="block block--example"> 
      <Example :source="exampleShape" language="html"></Example>
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
            <td class="component__property">variant</td>
            <td class="component__type">String</td>
            <td class="component__default">primary</td>
            <td class="component__description">The color appearance of the component.</td>
          </tr>
          <tr class="component">
            <td class="component__property">shape</td>
            <td class="component__type">String</td>
            <td class="component__default">rounded</td>
            <td class="component__description">The shape appearance of the component.</td>
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
            <td class="component__property">onClick</td>
            <td class="component__type">Native click event object</td>
            <td class="component__description">Emitted when non-disabled button clicked.</td>
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
import variantExample from './exampleVariant'
import exampleShape from './exampleShape'
import Example from '../../Example.vue'
import Headline from '../../Headline'

export default defineComponent({
  name: 'ButtonView',
  components: {
    Headline, Example
  },
  setup() {
    const activeItem = ref<String>('HTML')
    const activateItem = (item: String) => {
      activeItem.value = item
    }
    const isActive = (item: String) => (item === activeItem.value)

    return {
      activateItem, isActive,
      variantExample, exampleShape
    }
  }
})
</script>
