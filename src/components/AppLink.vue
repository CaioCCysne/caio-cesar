<script setup>
// RouterLink quando há rota; âncora placeholder quando a página ainda não existe
defineProps({ to: String })
</script>

<template>
  <RouterLink v-if="to" :to="to"><slot /></RouterLink>
  <a v-else href="#"><slot /></a>
</template>
