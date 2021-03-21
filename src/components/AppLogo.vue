<template>
  <div class="app__logo">
    <router-link :to="{ name: 'home' }" class="app__logo--link">
      <svg viewBox="0 0 172 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112 120L163.962 210H60.0385L112 120Z" fill="#81086C"/>
        <path d="M60 30L111.962 120H8.03848L60 30Z" fill="#C20B86"/>
        <path d="M60 210L8.03848 120L111.962 120L60 210Z" fill="#C20B86"/>
        <path d="M112 120L60.0385 30L163.962 30L112 120Z" fill="#C20B86"/>
      </svg>
      <span class="app__logo-text">ONE STUDIO</span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLogo'
})
</script>
