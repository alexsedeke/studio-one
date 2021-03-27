<template>
  <div class="doc__view">
    <h1 class="doc__headline">Button</h1>
    <p class="doc__introduction">
      Use Studio One custom <strong>one-button</strong> component for actions in forms, dialogs, and more.<br>
      Includes support for a handful of contextual variations, sizes, states, and more.
    </p>
    <hr>
    <div class="doc__presentation">
      <h2 class="doc__headline">Presentation</h2>
      
      <div class="example">
        <one-button variant="primary">Primary</one-button>
        <one-button variant="secondary">Secondary</one-button>
        <one-button variant="warning">Warning</one-button>
        <one-button variant="info">Info</one-button>
      </div>
      <div class="test-nav">
        <one-nav>
          <one-nav-item>test 1</one-nav-item>
          <one-nav-item :bisabled="buttonDisabled">test 2</one-nav-item>
          <one-nav-item test="bla">test 3</one-nav-item>
        </one-nav>
      </div>

      <div class="doc__snippets">
        <nav>
          <div class="current"></div>
          <a href="#one" class="active">Ruby</a>
          <a href="#two">Python</a>
          <a href="#three">Node</a>
          <a href="#four">Go</a>
        </nav>
        <div class="doc__snippet__content" id="one">
          <pre><code>require "stripe"
Stripe.api_key = "..."

Stripe::Charge.create(
  :amount => 2000,
  :currency => "eur",
  :source => "tok_mastercard", # obtained with Stripe.js
  :description => "Charge for hello@thomascullen.io"
)
          </code></pre>
        </div>
      </div>
    </div>
    <div class="doc__api">
      <h2 class="doc__headline">Component reference</h2>
      (violet)
      * attributes
      * events
      * methods
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ButtonView',
  setup() {
    const buttonDisabled = true

    return {
      buttonDisabled
    }
  }
})
</script>

<style lang="postcss" scoped>
.example {
  button {
    margin: 1rem;
  }
}
</style>
