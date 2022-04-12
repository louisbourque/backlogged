import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useGameStore } from '@/stores/gameState'

import App from './App.vue'
import router from './router'
import '@/assets/base.css'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')

const gameState = useGameStore()
router.beforeEach((to) => {
  if (!gameState.name && to.name !== 'Login') {
    return { name: 'Login' }
  }
})
