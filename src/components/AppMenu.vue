<script setup>
import seta from '@/assets/seta.svg'

const items = ['Agende um test drive', 'Veja ofertas', 'Encontre uma loja']
</script>

<template>
  <nav>
    <a v-for="i in items" :key="i" href="#">
      <span>{{ i }}</span>
      <span class="arrow"><img :src="seta" alt="" /></span>
    </a>
  </nav>
</template>

<style scoped>
nav {
  padding: 0 var(--pad);
}

a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 3px;
  gap: 16px;
  font-size: clamp(24px, 5vw, 72px);
  line-height: 1;
  text-transform: uppercase;
}

.arrow {
  flex: none;
  width: 23px;
  height: 35px;
  display: grid;
  place-items: center;
}

.arrow img {
  width: 35px;
  height: 23px;
  max-width: none;
  transform: rotate(90deg);
}
</style>
