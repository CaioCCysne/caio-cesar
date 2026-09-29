<script setup>
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import AppLink from './AppLink.vue'
import MegaMenu from './MegaMenu.vue'

const links = [
  ['Home', '/'],
  ['Sobre'],
  ['Veículos', '/carro'],
  ['Serviços'],
  ['Test Drive'],
]
const open = ref(false) // megamenu de "Veículos" (desktop)
const menu = ref(false) // gaveta (tablet/celular)
const close = () => (open.value = menu.value = false)
</script>

<template>
  <header @mouseleave="open = false" @keydown.esc="close">
    <AppLogo />
    <button class="burger" :class="{ on: menu }" :aria-expanded="menu" aria-label="Menu" @click="menu = !menu">
      <span />
    </button>
    <nav :class="{ show: menu }">
      <AppLink
        v-for="[label, to] in links"
        :key="label"
        :to="to"
        :class="{ active: open && label === 'Veículos' }"
        @mouseenter="open = label === 'Veículos'"
        @focus="open = label === 'Veículos'"
        @click="close"
      >
        {{ label }}
      </AppLink>
    </nav>
    <MegaMenu v-if="open" @click="open = false" />
  </header>
</template>

<style scoped>
header {
  position: relative;
  z-index: 10;
  height: 80px;
  padding: 0 var(--pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
}

nav {
  position: relative;
  z-index: 11;
  align-self: stretch;
  display: flex;
  gap: clamp(20px, 6.667vw, 96px);
  font-size: 16px;
  text-transform: uppercase;
  color: var(--ink);
}

nav a {
  position: relative;
  display: flex;
  align-items: center;
}

nav a.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--ink);
}

.burger {
  display: none;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

/* três barras: span + ::before/::after */
.burger span,
.burger span::before,
.burger span::after {
  display: block;
  width: 24px;
  height: 2px;
  margin: auto;
  background: var(--ink);
  transition: transform 0.2s;
}

.burger span {
  position: relative;
}

.burger span::before,
.burger span::after {
  content: '';
  position: absolute;
  left: 0;
}

.burger span::before {
  top: -8px;
}

.burger span::after {
  top: 8px;
}

.burger.on span {
  background: transparent;
}

.burger.on span::before {
  transform: translateY(8px) rotate(45deg);
}

.burger.on span::after {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 1024px) {
  .burger {
    display: block;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px var(--pad) 16px;
    background: #fff;
    border-top: 1px solid #d8d8d8;
    box-shadow: 0 7px 27.4px -9px rgba(0, 0, 0, 0.13);
    font-size: 18px;
  }

  nav.show {
    display: flex;
  }

  nav a {
    padding: 14px 0;
  }

  nav a.active::after {
    display: none;
  }
}
</style>
