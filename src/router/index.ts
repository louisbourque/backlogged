import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/board',
    },
    {
      path: '/board',
      name: 'Board',
      component: BoardView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
  ],
})

export default router
