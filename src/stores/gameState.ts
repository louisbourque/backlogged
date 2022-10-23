import { defineStore } from 'pinia'
import issues from './issues'

export type Issue = {
  state: 'todo' | 'inProgress' | 'done'
  title: string
}

export type RootState = {
  name: string
  topBarStatus: boolean
  issues: Issue[]
}

export const useGameStore = defineStore({
  id: 'gameStore',
  state: () =>
    ({
      name: '',
      topBarStatus: false,
      issues,
    } as RootState),
  getters: {
    topLinks: () => [{ to: '/home', text: 'Home', icon: 'home' }],
    topbar: (state) => state.topBarStatus,
    todoIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'todo'),
    inProgressIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'inProgress'),
    doneIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'done'),
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
    setGameState(gameState: RootState) {
      this.topBarStatus = gameState.topBarStatus
    },
  },
})
