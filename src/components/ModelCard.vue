<script setup>
import AppLink from './AppLink.vue'

defineProps({
  model: String,
  image: String,
  specs: Array, // [[rótulo, valor], ...]
  description: String,
  to: String,
})
</script>

<template>
  <article>
    <header>
      <h2>VINCI<br />MODEL {{ model }}</h2>
      <dl>
        <template v-for="[label, value] in specs" :key="label">
          <dt>{{ label }}</dt>
          <dd>{{ value }}</dd>
        </template>
      </dl>
    </header>
    <img :src="image" :alt="`Vinci Model ${model}`" />
    <footer>
      <span>{{ description }}</span>
      <AppLink :to="to">CONHEÇA</AppLink>
    </footer>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}

header {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 80px;
}

h2 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 9.6px;
  line-height: 1.2;
}

dl {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 32px;
  align-content: start;
  font-size: 18px;
  letter-spacing: 1.8px;
  line-height: 24px;
}

dd {
  color: #979797;
}

img {
  width: 90%;
  height: clamp(220px, 55vw, 425px);
  margin: -16px auto 0;
  object-fit: contain;
}

footer {
  display: flex;
  justify-content: space-between;
  margin: -4px 0 -7px; /* o Figma apara o texto na altura da capitular */
  font-size: 20px;
  line-height: 1;
  letter-spacing: 2px;
  color: #685757;
}

footer a {
  color: var(--ink);
  text-decoration: underline;
}

@media (max-width: 640px) {
  header {
    height: auto;
    flex-wrap: wrap;
    gap: 16px;
  }

  h2 {
    letter-spacing: 6px;
  }

  img {
    width: 100%;
    margin-top: 8px;
  }

  footer {
    flex-wrap: wrap;
    gap: 8px 16px;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>
