<script setup>
import AppHero from '@/components/AppHero.vue'
import ModelCard from '@/components/ModelCard.vue'
import AppMenu from '@/components/AppMenu.vue'
import v1 from '@/assets/v1.png'
import v2 from '@/assets/v2.png'
import estrada from '@/assets/banner-estrada.png'
import final from '@/assets/banner-final.png'

const specs = [
  ['Potência;', '300 cavalos'],
  ['Autonomia:', '500km por carga'],
  ['Peso:', '1.500 kg'],
  ['Tecnologia:', 'GPS e Smartink'],
]
const description = 'A SUV mais robusta da categoria'
const models = [
  { model: 'V2', image: v2, to: '/carro' },
  { model: 'V1', image: v1 },
]
</script>

<template>
  <AppHero />
  <section id="modelos" class="models">
    <ModelCard v-for="m in models" :key="m.model" v-bind="m" :specs="specs" :description="description" />
  </section>
  <div class="banner"><img :src="estrada" alt="" /></div>
  <div class="menu"><AppMenu /></div>
  <div class="banner final"><img :src="final" alt="" /></div>
</template>

<style scoped>
.models {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 97px;
  padding: var(--gap) var(--pad);
}

.menu {
  padding-block: calc(var(--gap) - min(20px, 1.4vw));
}

@media (max-width: 900px) {
  .models {
    grid-template-columns: 1fr;
    row-gap: 56px;
  }
}

.final img {
  object-position: 50% 75%;
}
</style>
