<script setup>
import branco from '@/assets/carro-hero.png'
import vermelho from '@/assets/menu-vermelho.png'
import preto from '@/assets/menu-preto.png'
import verde from '@/assets/menu-verde.png'
import AppLink from './AppLink.vue'

const models = [
  { name: 'Modelo V1', img: branco },
  { name: 'Modelo V2', img: vermelho, cover: true, to: '/carro' },
  { name: 'Modelo V3', img: preto, cover: true },
  { name: 'Modelo V1', img: verde, cover: true },
  { name: 'Modelo V1', img: branco },
  { name: 'Modelo V1', img: branco },
]
const links = ['Ofertas', 'Test Drive', 'Lojas', 'Serviços', 'SAC', 'Privacidade']
</script>

<template>
  <div class="mega">
    <ul class="cards">
      <li v-for="(m, i) in models" :key="i">
        <img :src="m.img" alt="" :class="{ cover: m.cover }" />
        <strong>{{ m.name }}</strong>
        <div>
          <AppLink :to="m.to">Ver mais</AppLink>
          <a href="#">Comprar</a>
        </div>
      </li>
    </ul>
    <div class="side">
      <h3>Navegue</h3>
      <a v-for="l in links" :key="l" href="#" :class="{ hot: l === 'Test Drive' }">{{ l }}</a>
    </div>
  </div>
</template>

<style scoped>
.mega {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 524px;
  background: #fff;
  border-top: 1px solid #d8d8d8;
  box-shadow: 0 7px 27.4px -9px rgba(0, 0, 0, 0.13);
  display: grid;
  grid-template-columns: calc(66.67% + 16px) 1fr;
}

.cards {
  list-style: none;
  padding: 0;
  margin: 25px 0 0 var(--pad);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 296px));
  gap: 26px 8px;
  align-content: start;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li img {
  width: 100%;
  height: 144px;
  object-fit: contain;
}

li img.cover {
  width: min(250px, 100%);
  height: 122px;
  margin: 11px 0;
  object-fit: cover;
}

strong {
  margin-top: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--ink);
}

li div {
  display: flex;
  gap: 27px;
  font-size: 16px;
  line-height: 20px;
  color: var(--ink);
}

.side {
  margin-top: 33px;
  height: 453px;
  padding-left: 21px;
  border-left: 1px solid #d8d8d8;
}

h3 {
  width: min(275px, 100%);
  height: 37px;
  padding-top: 6px;
  border-bottom: 1px solid #d8d8d8;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 5.6px;
  text-transform: uppercase;
  color: #979797;
}

h3 + a {
  margin-top: 13px;
}

.side a {
  display: block;
  margin-left: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  color: #000;
}

.side a.hot {
  color: var(--red);
}

/* abaixo disso o header usa a gaveta */
@media (max-width: 1024px) {
  .mega {
    display: none;
  }
}
</style>
