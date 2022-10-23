import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'gameStore',
  state: () => ({
    name: '',
    topBarStatus: false,
  }),
  getters: {
    topLinks: () => [{ to: '/home', text: 'Home', icon: 'home' }],
    topbar: (state) => state.topBarStatus,
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
    setGameState(gameState) {
      this.topBarStatus = gameState.topBarStatus
    },
  },
})
