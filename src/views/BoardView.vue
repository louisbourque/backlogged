<script setup lang="ts">
import { useGameStore, type Issue } from '@/stores/gameState'
import { reactive, computed } from 'vue'
import IssueTag from '@/components/IssueTag.vue'
import IssueContent from '@/components/IssueContent.vue'
import { X } from 'lucide-vue-next'

const gameStore = useGameStore()
const canShowReset = import.meta.env.DEV

const issueTypes = [
  { key: 'todoIssues', title: 'Todo' },
  { key: 'inProgressIssues', title: 'In Progress' },
  { key: 'doneIssues', title: 'Done' },
]

const state: { currentIssueId: number } = reactive({ currentIssueId: 0 })
const currentIssue = computed(() => {
  return state.currentIssueId === 0
    ? null
    : gameStore.issues.find((issue) => issue.id === state.currentIssueId)
})

const openIssue = (issue: Issue) => {
  state.currentIssueId = issue.id
}
const closeIssue = () => {
  state.currentIssueId = 0
}
</script>

<template>
  <div class="flex flex-col p-4 text-gray-800">
    <h1 class="mb-2">Backlogged</h1>

    <div class="flex h-full flex-row gap-4">
      <div
        v-for="type in issueTypes"
        :key="type.key"
        class="flex w-64 flex-none flex-col gap-2 rounded-md bg-slate-200 p-2"
      >
        <div class="-m-2 mb-0 flex rounded-t-md bg-slate-100 p-2">
          <h2>{{ type.title }}</h2>
          <div
            v-if="gameStore.showIssueCounts && (gameStore[type.key as keyof typeof gameStore] as Issue[]).length > 0"
            class="ml-1 inline h-5 rounded-full bg-slate-300 px-1.5 text-sm font-semibold"
          >
            {{
              type.key === 'doneIssues'
                ? gameStore.doneIssuesCount
                : (gameStore[type.key as keyof typeof gameStore] as Issue[])
                    .length
            }}
          </div>
        </div>
        <button
          v-for="issue in (gameStore[type.key as keyof typeof gameStore] as Issue[])"
          :key="issue.title"
          class="cursor-pointer rounded border border-slate-400 bg-white p-1 text-left"
          @click="openIssue(issue)"
        >
          {{ issue.title }}
          <div v-if="issue.tags">
            <IssueTag v-for="tag in issue.tags" :tag="tag" :key="tag" />
          </div>
        </button>
      </div>
    </div>
    <div v-if="currentIssue">
      <button
        class="fixed inset-0 h-screen w-screen bg-slate-900 opacity-50 duration-700"
        @click="closeIssue"
        aria-label="Close Issue"
      ></button>
      <div
        @click.stop
        class="fixed inset-y-0 right-0 flex w-full flex-col bg-white opacity-100 md:w-8/12"
      >
        <header class="relative">
          <div class="mr-12 p-2">
            <div>Issue #{{ currentIssue.id }}</div>
            <h3>{{ currentIssue.title }}</h3>
          </div>
          <button
            class="absolute top-2 right-2"
            @click="closeIssue"
            aria-label="Close Issue"
          >
            <X :size="26" class="inline text-slate-900" />
          </button>
        </header>
        <hr />
        <div class="grow overflow-auto">
          <IssueContent :issue="currentIssue" @close="closeIssue" />
        </div>
      </div>
    </div>
    <div
      v-if="canShowReset"
      @click="gameStore.resetGameState()"
      class="fixed right-2 bottom-1"
    >
      <button>reset</button>
    </div>
  </div>
</template>
