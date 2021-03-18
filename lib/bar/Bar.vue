<template>
  <div ref="barElement" class="one-bar" :class="getResizerStyle">
    <div class="one-bar__content"><slot></slot></div>
  </div>
</template>
<script lang="ts">
import { ref, computed, defineComponent, onMounted, PropType } from 'vue'
import { ResizerKeyType } from '../types'
import { resizeHandler } from '../features/resizer'

export default defineComponent({
  name: 'one-bar',
  props: {
    resizer: {
      type: String as PropType<ResizerKeyType>,
      required: false
    }
  },
  setup: (props) => {
    const barElement = ref<HTMLElement | null>(null)

    const getResizerStyle = computed(() => {
      if (props.resizer) {
        return `one-resize--${props.resizer}-parent`
      }
      return ''
    })

    onMounted(() => {
      if (props.resizer && barElement.value) {
        resizeHandler(barElement.value, props.resizer)
      }
    })
    
    return { barElement, getResizerStyle }
  }
})
</script>
