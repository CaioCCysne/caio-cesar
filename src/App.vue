<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main><RouterView /></main>
  <div class="footer"><AppFooter /></div>
</template>

<style scoped>
.footer {
  padding: var(--gap) 0 60px;
}
</style>
