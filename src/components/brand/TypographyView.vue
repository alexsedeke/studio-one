<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Typography</h1>
    </header>
    <div class="block block--text">
      <p>
        We chose these two typefaces specif­i­cal­ly because they reflect the premium quality of our products.
        Between Barlow and Roboto, we have every situation covered.
      </p>
    </div>
    <!-- Barlow -->
    <div class="block--heading" id="Barlow">
      <h2 class="h h--h2">
        <a href="#Barlow" class="h__anchor">Barlow</a><span class="h__anchor__indicator">#</span>
      </h2>
    </div>
    <div class="block block--text">
      <p>
        Barlow is a slightly rounded, low-contrast, grotesk type family. Drawing from the visual style of the California public, 
        Barlow shares qualities with the state's car plates, highway signs, busses, and trains.
        <br>
        This is the Normal family, which is part of the superfamily along with <a href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?preview.text_type=custom" target="_blank">Semi Condensed</a> 
        and <a href="https://fonts.google.com/specimen/Barlow+Condensed?preview.text_type=custom" target="_blank">Condenseda</a>, each with 9 weights in Roman and Italic.
        <br>
        The Barlow project is led by Jeremy Tribby, a designer based in San Francisco, USA. To contribute, see <a href="https://github.com/jpt/barlow" target="_blank">github.com/jpt/barlow</a>
      </p>
    </div>
    <!-- Roboto -->
    <div class="block--heading" id="Roboto">
      <h2 class="h h--h2">
        <a href="#Roboto" class="h__anchor">Roboto</a><span class="h__anchor__indicator">#</span>
      </h2>
    </div>
    <div class="block block--text">
      <p>
        Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. 
        While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. 
        This makes for a more natural reading rhythm more commonly found in humanist and serif types.
        <br>
        This is the regular family, which can be used alongside the <a href="https://fonts.google.com/specimen/Roboto+Condensed" target="_blank">Roboto Condensed</a> 
        family and the <a href="https://fonts.google.com/specimen/Roboto+Slab" target="_blank">Roboto Slab</a> family.
        <br>
        To contribute, see <a href="https://github.com/google/roboto/" target="_blank">github.com/google/roboto</a>
      </p>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TypographyView'
})
</script>
