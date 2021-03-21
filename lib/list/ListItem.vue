<template>
  <li class="one-listitem" :class="cssClasses">
    <slot name="pre"></slot>
    <slot></slot>
    <slot name="post"></slot>
  </li>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from 'vue'
import Classlist from '../features/classlist'

export default defineComponent({
  name: 'one-list-item',
  props: {
    active: {
      type: Boolean
    }
  },
  setup(props) {
    const cssClasses = ref<String>('')
    const classlist = new Classlist()

    watch(() => props.active, (currentValue) => {
      if (currentValue === true) {
        classlist.addClass('one-listitem--active')
      } else {
        classlist.removeClass('one-listitem--active')
      }
      cssClasses.value = classlist.join(' ')
    })
    
    return { cssClasses }
  }
})
</script>
