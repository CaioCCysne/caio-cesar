<script setup>
import logo from '@/assets/logo.svg'
import AppLink from './AppLink.vue'
</script>

<template>
  <AppLink to="/" class="logo">
    <img :src="logo" alt="" width="40.5" height="34" />
    <span>VINCI</span>
  </AppLink>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 41.659px;
  letter-spacing: 16.66px;
  line-height: 1;
}

@media (max-width: 640px) {
  .logo {
    gap: 16px;
    font-size: 28px;
    letter-spacing: 10px;
  }

  .logo img {
    width: 28px;
    height: auto;
  }
}
</style>
