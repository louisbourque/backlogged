import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/board',
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/board',
      name: 'Board',
      component: BoardView,
    },
  ],
})

export default router
