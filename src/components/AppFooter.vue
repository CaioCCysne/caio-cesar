<script setup>
import AppLogo from './AppLogo.vue'

const cols = {
  Sobre: ['A Marca', 'História', 'Qualidade', 'Onde estamos', 'Investidores'],
  Contato: ['Fale Conosco', 'Atendimento', 'SAC'],
  SAC: ['Canais Oficiais', 'Redes Sociais', 'Suporte'],
}
</script>

<template>
  <footer>
    <div class="brand">
      <AppLogo />
      <p>©Copyright 2026.<br />Todos os Direitos Reservados.</p>
    </div>
    <section v-for="(links, title) in cols" :key="title">
      <h3>{{ title }}</h3>
      <a v-for="l in links" :key="l" href="#">{{ l }}</a>
    </section>
  </footer>
</template>

<style scoped>
footer {
  min-height: 311px;
  padding: 0 var(--pad);
  display: grid;
  grid-template-columns: 1fr 254px 249px auto;
  white-space: nowrap;
}

.brand {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand p {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 6.4px;
  text-transform: uppercase;
  color: var(--gray);
}

section {
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 26px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 4.8px;
  text-transform: uppercase;
}

section a {
  font-size: 20px;
  line-height: 42px;
  letter-spacing: 4px;
  color: var(--gray);
}

@media (max-width: 1200px) {
  footer {
    min-height: 0;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    gap: 40px 24px;
    white-space: normal;
  }

  .brand {
    display: contents;
  }

  .brand > a {
    grid-column: 1 / -1;
  }

  .brand p {
    grid-column: 1 / -1;
    order: 2;
  }

  section {
    order: 1;
  }
}

@media (max-width: 640px) {
  footer {
    grid-template-columns: 1fr 1fr;
  }

  .brand p {
    letter-spacing: 3px;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 3px;
  }

  section a {
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 2px;
  }
}
</style>
