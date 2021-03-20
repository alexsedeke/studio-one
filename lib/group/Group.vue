<template>
  <div class="one-group">
    <h6 class="one-group__headline">
      <span>Headline</span>
      <span>U</span>
    </h6>
    <div class="one-group__content"
      :class="{'one-group__content--isHidden': isCollapsed}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import  { ref, watch, defineComponent } from 'vue'
export default defineComponent({
  name: 'one-group',
  props: {
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const isCollapsed = ref(props.isCollapsed)
    watch(() => props.isCollapsed, (currentValue) => {
      isCollapsed.value = currentValue
    })

    const toggleVisibility = () => {
      isCollapsed.value = !isCollapsed.value
    }

    return { toggleVisibility }
  }
})
</script>
