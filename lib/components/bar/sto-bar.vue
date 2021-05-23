<template>
  <div ref="barElement" class="sto-bar" :class="getResizerStyle">
    <div class="sto-bar__content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed, defineComponent, onMounted, PropType } from 'vue'
import { ResizerKeyType } from '../../types/index'
import { resizeHandler } from '../../core/resizer'

export default defineComponent({
  name: 'sto-bar',
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
        return `sto-resize--${props.resizer}-parent`
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
