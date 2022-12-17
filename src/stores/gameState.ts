import { defineStore } from 'pinia'
import issues from './issues'

const STORAGE_KEY = 'backlogged.gameState'

const ADD_COLOUR_ID = 3
const IMPROVE_PROGRESS_ID = 5
const SHOW_ISSUE_COUNTS = 7
const ARCHIVE_DONE_ISSUES = 15

addEventListener('storage', (event) => {
  if (event.newValue) {
    useGameStore().loadGameState(JSON.parse(event.newValue))
  } else {
    useGameStore().resetGameState(true)
  }
})

const getFromStorage = () => {
  const localGameState = localStorage.getItem(STORAGE_KEY)
  if (localGameState) {
    try {
      return JSON.parse(localGameState)
    } catch (error) {
      return null
    }
  }
  return null
}

const resetStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}

const saveToStorage = (payload: unknown) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

export type Issue = {
  id: number
  state: 'todo' | 'inProgress' | 'done'
  title: string
  type: string
  description: string
  progress_label: string
  started?: number
  expression?: string
  dependsOn?: number[]
  dependsOnOr?: number[]
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
  allDoneIssues: Issue[]
  doneIssues: Issue[]
  showColor: boolean
  betterProgressBar: boolean
  showIssueCounts: boolean
  archiveDoneIssues: boolean
  updateIssue: (payload: Issue) => void
  loadGameState: (localGameState?: unknown) => void
  saveGameState: () => void
}

export const useGameStore = defineStore({
  id: 'gameStore',
  state: () =>
    ({
      name: '',
      topBarStatus: false,
      issues: [...(issues as Issue[])],
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
            issue.dependsOn.every((dependsOn) =>
              this.allDoneIssues.find(
                (doneIssue: Issue) => doneIssue.id === dependsOn
              )
            )) &&
          (!issue.dependsOnOr ||
            issue.dependsOnOr.some((dependsOn) =>
              this.allDoneIssues.find(
                (doneIssue: Issue) => doneIssue.id === dependsOn
              )
            ))
      )
    },
    inProgressIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'inProgress'),
    allDoneIssues: (state) =>
      state.issues.filter((issue) => issue.state === 'done'),
    doneIssues(state) {
      return this.archiveDoneIssues
        ? state.issues
            .filter((issue) => issue.state === 'done')
            .reverse()
            .slice(0, 10)
            .reverse()
        : this.allDoneIssues
    },
    showColor: (state) =>
      state.issues.find((issue) => issue.id === ADD_COLOUR_ID)?.state ===
      'done',
    betterProgressBar: (state) =>
      state.issues.find((issue) => issue.id === IMPROVE_PROGRESS_ID)?.state ===
      'done',
    showIssueCounts: (state) =>
      state.issues.find((issue) => issue.id === SHOW_ISSUE_COUNTS)?.state ===
      'done',
    archiveDoneIssues: (state) =>
      state.issues.find((issue) => issue.id === ARCHIVE_DONE_ISSUES)?.state ===
      'done',
  },
  actions: {
    loadGameState(localGameState: unknown) {
      if (!localGameState) {
        localGameState = getFromStorage()
      }
      Object.assign(this, localGameState)
    },
    saveGameState() {
      saveToStorage(this.$state as unknown)
    },
    resetGameState(fromEvent?: boolean) {
      if (!fromEvent) {
        resetStorage()
      }
      Object.assign(this, {
        name: '',
        topBarStatus: false,
        issues: [...(issues as Issue[])],
      })
      this.issues.forEach((issue) => {
        if (issue.id < 15) {
          issue.state = 'done'
        }
      })
    },
    updateIssue(payload: Issue) {
      const index = this.issues.findIndex((issue) => issue.id === payload.id)
      if (index > -1) {
        this.issues[index] = payload
      }
      this.saveGameState()
    },
  },
})
