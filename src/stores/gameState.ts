import { defineStore } from 'pinia'
import issues from './issues'

export type Issue = {
  id: number
  state: 'todo' | 'inProgress' | 'done'
  title: string
  type: string
  description: string
  expression?: string
  answer?: string
  dependsOn?: number
  tags?: string[]
}

export type RootState = {
  name: string
  topBarStatus: boolean
  issues: Issue[]
  topLinks: { to: string; text: string; icon: string }[]
  topbar: boolean
  todoIssues: Issue[]
  inProgressIssues: Issue[]
  doneIssues: Issue[]
  updateIssue: (payload: Issue) => void
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
    todoIssues(state) {
      return state.issues.filter(
        (issue) =>
          issue &&
          issue.state === 'todo' &&
          (!issue.dependsOn ||
            this.doneIssues.find(
              (doneIssue: Issue) => doneIssue.id === issue.dependsOn
            ))
      )
    },
    inProgressIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'inProgress'),
    doneIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'done'),
  },
  actions: {
    updateIssue(payload: Issue) {
      const index = this.issues.findIndex((issue) => issue.id === payload.id)
      if (index > -1) {
        this.issues[index] = payload
      }
    },
  },
})
