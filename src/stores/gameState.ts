import { defineStore } from 'pinia'
import issues from './issues'

const STORAGE_KEY = 'backlogged.issues'

const ADD_COLOUR_ID = 3
const IMPROVE_PROGRESS_ID = 5
const SHOW_ISSUE_COUNTS = 7
const ARCHIVE_DONE_ISSUES = 15
const NAVIGATION_SECTION = 20
const NAVIGATION_LINK_ABOUT = 21
const ABOUT_CONTENT = 22
const SHOW_REAL_DONE_COUNT = 23

addEventListener('storage', (event) => {
  if (event.newValue) {
    useGameStore().loadGameState(JSON.parse(event.newValue))
  } else {
    useGameStore().resetGameState()
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

const saveToStorage = (payload: unknown) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

export type BaseIssue = {
  id: number
  state: 'todo' | 'inProgress' | 'done'
  started?: number
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

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    name: '',
    issues: [...(issues as Issue[])],
  }),
  getters: {
    topLinks: () => [{ to: '/home', text: 'Home', icon: 'home' }],
    todoIssues(state): Issue[] {
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
    doneIssues(state): Issue[] {
      return this.archiveDoneIssues
        ? state.issues
            .filter((issue) => issue.state === 'done')
            .reverse()
            .slice(0, 10)
            .reverse()
        : this.allDoneIssues
    },
    doneIssuesCount(state): number {
      return state.issues.find((issue) => issue.id === SHOW_REAL_DONE_COUNT)
        ?.state === 'done'
        ? this.allDoneIssues.length
        : this.doneIssues.length
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
    showNavigationSection: (state) =>
      state.issues.find((issue) => issue.id === NAVIGATION_SECTION)?.state ===
      'done',
    showAboutLink: (state) =>
      state.issues.find((issue) => issue.id === NAVIGATION_LINK_ABOUT)
        ?.state === 'done',
    showAboutContent: (state) =>
      state.issues.find((issue) => issue.id === ABOUT_CONTENT)?.state ===
      'done',
  },
  actions: {
    loadGameState(localIssues?: BaseIssue[]) {
      if (!localIssues) {
        localIssues = getFromStorage() ?? []
      }
      this.$state.issues = (issues as Issue[]).map((issue) => ({
        ...issue,
        ...(localIssues?.find((localIssue) => localIssue.id === issue.id) ??
          {}),
      }))
    },
    saveGameState() {
      saveToStorage(
        this.$state.issues.map((issue) => ({
          id: issue.id,
          state: issue.state,
          started: issue.started,
        })) as unknown
      )
    },
    resetGameState() {
      this.$state.issues = [...(issues as Issue[])]

      this.$state.issues.forEach((issue) => {
        if (issue.id < 19) {
          issue.state = 'done'
        }
      })
      this.saveGameState()
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
