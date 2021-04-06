<template>
  <div class="example">
    <div class="example__presentation">
      <Hypertext :html="ediableSource"></Hypertext>
    </div> 
    <div class="example__snippet">
      <div class="example__snippet__title">Source</div>
      <pre><code
        :class="language"
        contenteditable="true"
        @input="onChange">{{source}}</code></pre></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, toRefs, ref } from 'vue'
import { debounce } from 'lodash'
import * as hljs from 'highlight.js'
import Hypertext from './Hypertext'

export default defineComponent({
  name: 'Example',
  props: {
    source: {
      type: String,
      required: true
    },
   language: {
     type: String,
     require: true
   }
  },
  components: {
    Hypertext
  },
  setup(props) {
    const {source, language} = toRefs(props)
    const ediableSource = ref(source.value)
    const onChange = debounce((event: { target: HTMLInputElement }) => {
      ediableSource.value = event.target.innerText
    }, 500)

    onMounted(() => {
      hljs.highlightAll()
    })

    return {
      ediableSource, source, language, onChange
    }
  }
})
</script>
