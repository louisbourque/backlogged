import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'gameState',
  state: () => ({
    name: '',
  }),
  getters: {
    sideLinks: (state) => [
      { to: '/home', text: 'Home', icon: 'home' },
      { to: '/about', text: 'Clients', icon: 'account-tie' },
      { to: '/home', text: 'Infrastructure', icon: 'server-network' },
      { to: '/table', text: 'Staff', icon: 'account-group' },
    ],
  },
  actions: {
    setName(name) {
      this.name = name
    },
  },
})
