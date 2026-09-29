import { createRouter, createWebHistory } from 'vue-router'
  import HomePage from '../views/HomePage.vue'
   import CarroPage from '../views/CarroPage.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/carro', component: CarroPage },
  ],
  scrollBehavior: (to) => (to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 }),
})
