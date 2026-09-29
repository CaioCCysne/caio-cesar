<script setup>
import hero from '@/assets/carro-hero.png'
import AppLink from '@/components/AppLink.vue'
import estrada from '@/assets/carro-estrada.png'
import recarga from '@/assets/feat-recarga.png'
import painel from '@/assets/feat-painel.png'
import pontos from '@/assets/feat-pontos.png'
import design from '@/assets/feat-design.png'
import detalhes from '@/assets/carro-detalhes.png'
import ponto from '@/assets/ponto.svg'
import pontoLegenda from '@/assets/ponto-legenda.svg'
import chevron from '@/assets/chevron.svg'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const stats = [
  ['520 KM', 'com 1 carga'],
  ['2.800 RPM', 'de torque'],
  ['10 anos', 'garantia'],
]

const features = [
  { title: 'recarga rápida', img: recarga },
  { title: 'painel de instrumentos', img: painel },
  { title: 'pontos de recarga', img: pontos },
  { title: 'design premiado', img: design },
]

// x/y em px do design (imagem 1074x604); renderizados em %
const hotspots = [
  { k: 'A', x: 167, y: 185, label: 'Retrovisores inteligentes' },
  { k: 'B', x: 116, y: 399, label: 'Rodas de liga leve' },
  { k: 'C', x: 325, y: 235, label: 'Reconhecimento de digital' },
  { k: 'D', x: 585, y: 212, label: 'Sensor de proximidade' },
  { k: 'E', x: 705, y: 81, label: 'Antena 5G' },
  { k: 'F', x: 687, y: 351, label: 'Design sofisticado' },
  { k: 'G', x: 842, y: 203, label: 'Abertura automática' },
  { k: 'H', x: 999, y: 416, label: 'Câmera de estacionamento' },
]

const faq = [
  'Qual é a autonomia real da bateria em diferentes condições de condução?',
  'Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?',
  'Como funciona a infraestrutura de recarga para viagens de longa distância?',
  'Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?',
  'Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?',
]
</script>

<template>
  <section class="hero">
    <img :src="hero" alt="Vinci Model V2" />
    <h1>VINCI MODEL V2</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever.
    </p>
    <div class="actions">
      <AppLink to="/" class="btn primary">Modelos</AppLink>
      <a href="#" class="btn">Test Drive</a>
    </div>
  </section>

  <section class="stats">
    <h2>tecnologia aliada ao futuro</h2>
    <dl>
      <div v-for="[valor, legenda] in stats" :key="valor">
        <dt>{{ valor }}</dt>
        <dd>{{ legenda }}</dd>
      </div>
    </dl>
  </section>

  <div class="road"><img :src="estrada" alt="" /></div>

  <section class="features">
    <article v-for="f in features" :key="f.title">
      <div class="txt">
        <h3>{{ f.title }}</h3>
        <p>{{ lorem }}</p>
      </div>
      <img :src="f.img" alt="" />
    </article>
  </section>

  <section class="detalhes">
    <div class="intro">
      <div>
        <h2>VINCI MODEL V2</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever.
        </p>
      </div>
      <ul v-for="col in [hotspots.slice(0, 4), hotspots.slice(4)]" :key="col[0].k">
        <li v-for="h in col" :key="h.k">
          <span class="dot"><img :src="pontoLegenda" alt="" />{{ h.k }}</span>
          {{ h.label }}
        </li>
      </ul>
    </div>
    <div class="car">
      <img :src="detalhes" alt="Vinci Model V2 em detalhes" />
      <span
        v-for="h in hotspots"
        :key="h.k"
        class="dot"
        :style="{ left: (h.x / 1074) * 100 + '%', top: (h.y / 604) * 100 + '%' }"
      >
        <img :src="ponto" alt="" />{{ h.k }}
      </span>
    </div>
  </section>

  <section class="faq">
    <h2>FAQ</h2>
    <p class="sub">PERGUNTAS FREQUENTES</p>
    <ul>
      <li v-for="q in faq" :key="q">
        <span>{{ q }}</span>
        <img :src="chevron" alt="" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--pad);
  text-align: center;
}

.hero img {
  width: 947px;
  max-width: 100%;
  margin-top: -23px;
}

h1 {
  margin: -20px 0 14px;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 400;
  line-height: 1;
}

.hero p {
  width: 911px;
  max-width: 100%;
  margin-top: 0;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 36px;
  color: var(--gray);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 17px;
  margin-top: 27px;
}

.btn {
  width: 273px;
  max-width: 100%;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
}

.btn.primary {
  background: var(--red);
  border-color: var(--red);
  color: #fff;
}

.stats {
  margin-top: 69px;
  padding: 0 var(--pad);
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
}

.stats h2 {
  margin-bottom: 37px;
  font-size: 24px;
  font-weight: 300;
  color: var(--gray);
}

dl {
  display: flex;
  justify-content: center;
  text-align: left;
}

dl > div {
  padding-right: clamp(20px, 4.5vw, 65px);
}

dl > div + div {
  padding-left: clamp(20px, 4vw, 58px);
  border-left: 1px solid #d3d0d0;
}

dl > div:last-child {
  padding-right: 0;
}

dt {
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1;
}

dd {
  margin-top: 8px;
  font-size: 24px;
}

.road {
  margin: clamp(40px, 5.6vw, 81px) var(--pad) 0;
}

.road img {
  width: 100%;
  height: clamp(200px, 36vw, 520px);
  object-fit: cover;
  border-radius: 12px;
}

.features {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.txt {
  min-height: 191px;
  padding: 37px 26px 24px;
}

article + article .txt {
  border-left: 1px solid #e8e8e8;
}

h3 {
  margin-bottom: 16px;
  font-size: 26px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.txt p {
  max-width: 319px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #979797;
}

.features img {
  width: 100%;
  height: 272px;
  object-fit: cover;
}

.detalhes {
  width: min(1360px, calc(100% - 2 * var(--pad)));
  margin: 55px auto 0;
}

.intro {
  display: grid;
  grid-template-columns: 1fr 229px 228px;
  column-gap: 36px;
  min-height: 149px;
}

.intro h2 {
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
}

.intro p {
  width: 379px;
  margin-top: 24px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 32px;
  color: var(--gray);
}

.intro ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 17px;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--gray);
}

.intro li {
  display: flex;
  align-items: center;
  gap: 9px;
  white-space: nowrap;
}

.dot {
  position: relative;
  isolation: isolate;
  flex: none;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  color: #fff;
}

.dot img {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.car {
  position: relative;
  width: min(1074px, 100%);
  aspect-ratio: 1074 / 604;
  margin: 1px auto 0;
}

.car > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car .dot {
  position: absolute;
}

.faq {
  margin: 26px 0 -13px;
  padding: 0 max(var(--pad), calc((100% - 1064px) / 2)) 86px;
  border-bottom: 1px solid #bcbcbc;
  text-align: center;
}

.faq h2 {
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
}

.sub {
  margin-top: 18px;
  font-size: 22px;
  letter-spacing: 2.2px;
  color: #979797;
}

.faq ul {
  list-style: none;
  padding: 0;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 53px;
  text-align: left;
}

.faq li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  font-size: clamp(15px, 1.8vw, 26px);
  line-height: 1.25;
  text-transform: uppercase;
  color: var(--ink);
}

.faq li img {
  flex: none;
  transform: rotate(180deg);
}

@media (max-width: 1024px) {
  h1 {
    margin-top: 8px;
  }

  .features {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 2 colunas: divisor só nas colunas pares */
  article:nth-child(odd) .txt {
    border-left: 0;
  }

  .intro {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
    min-height: 0;
  }

  .intro > div {
    grid-column: 1 / -1;
  }

  .intro p {
    width: auto;
    max-width: 379px;
  }
}

@media (max-width: 640px) {
  .stats h2 {
    font-size: 18px;
  }

  dl {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  dl > div,
  dl > div:last-child {
    padding: 20px 0;
  }

  dl > div + div {
    border-left: 0;
    border-top: 1px solid #d3d0d0;
  }

  .features {
    grid-template-columns: 1fr;
  }

  article:nth-child(n) .txt {
    border-left: 0;
  }

  .intro {
    grid-template-columns: 1fr;
  }

  .intro li {
    white-space: normal;
  }

  .faq ul {
    gap: 28px;
  }

  .faq h2 {
    font-size: 32px;
  }

  .sub {
    font-size: 16px;
  }
}
</style>
