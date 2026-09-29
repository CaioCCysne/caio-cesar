<script setup>
import hero from '@/assets/hero.png'
import AppLink from './AppLink.vue'
</script>

<template>
  <section class="hero">
    <img :src="hero" alt="" />
    <div class="content">
      <h1>VINCI MODEL V3</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever.
      </p>
      <div class="actions">
        <AppLink to="/#modelos" class="btn primary">Modelos</AppLink>
        <a href="#" class="btn">Test Drive</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 637px;
  color: #fff;
  display: flex;
  align-items: flex-end;
}

img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 96%;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 78%;
  background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.48));
}

.content {
  position: relative;
  width: 100%;
  padding: 0 var(--pad) 74px;
}

h1 {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 400;
  line-height: 1;
}

p {
  width: 706px;
  max-width: 100%;
  margin: 0 0 33px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 36px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
}

.btn {
  width: 273px;
  max-width: 100%;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
}

.btn.primary {
  background: var(--red);
  border-color: var(--red);
}

@media (max-width: 1024px) {
  .hero::before {
    width: 100%;
    background: rgba(0, 0, 0, 0.45);
  }
}

@media (max-width: 640px) {
  .hero {
    height: 540px;
  }

  .content {
    padding-bottom: 40px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 24px;
  }

  .actions {
    flex-direction: column;
    gap: 12px;
  }

  .btn {
    width: 100%;
  }
}
</style>
