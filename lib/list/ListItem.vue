<template>
  <li class="one-listitem" :class="getClasses">
    <slot name="pre"></slot>
    <slot></slot>
    <slot name="post"></slot>
  </li>
</template>

<script lang="ts">
import  { ref, watch, defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'one-list-item',
  props: {
    active: {
      type: Boolean
    }
  },
  setup(props) {
    const cssClasses = ref<String[]>([])
    /**
     * Remove class name from list if present.
     */
    const removeClass = (className: String) => {
      const indexOfOccurrence = cssClasses.value.indexOf(className)
      if (indexOfOccurrence >= 0) {
        cssClasses.value.splice(indexOfOccurrence, 1)
      }
    }
    /**
     * Add class name to list if not present.
     */
    const addClass = (className: String) => {
      if (!cssClasses.value.includes(className)) {
        cssClasses.value.push(className)
      }
    }
    watch(() => props.active, (currentValue) => {
      if (currentValue === true) {
        addClass('one-listitem--active')
      } else {
        removeClass('one-listitem--active')
      }
    })

    const getClasses = computed(() => cssClasses.value.join(' '))
    
    return {
      getClasses
    }
  }
})
</script>
