<script setup lang="ts">
import { useGameStore, type Issue } from '@/stores/gameState'
import { reactive } from 'vue'
import IssueTag from '@/components/IssueTag.vue'

const gameStore = useGameStore()

const issueTypes = [
  { key: 'todoIssues', title: 'Todo' },
  { key: 'inProgressIssues', title: 'In Progress' },
  { key: 'doneIssues', title: 'Done' },
]

let state: { currentIssue: Issue | null } = reactive({ currentIssue: null })

const openIssue = (issue: Issue) => {
  state.currentIssue = issue
}
const closeIssue = () => {
  state.currentIssue = null
}
</script>

<template>
  <div class="flex flex-col p-4 text-gray-800">
    <h1 class="mb-2">Backlog</h1>

    <div class="flex flex-row gap-4 h-full">
      <div
        v-for="type in issueTypes"
        :key="type.key"
        class="flex flex-col flex-none gap-2 p-2 w-64 bg-slate-200 rounded-md"
      >
        <div class="flex p-2 -m-2 mb-0 bg-slate-100 rounded-t-md">
          <h2>{{ type.title }}</h2>
          <div
            v-if="(gameStore[type.key as keyof typeof gameStore] as Issue[]).length > 0"
            class="inline px-1.5 ml-1 h-5 text-sm font-semibold bg-slate-300 rounded-full"
          >
            {{ (gameStore[type.key as keyof typeof gameStore] as Issue[]).length }}
          </div>
        </div>
        <div
          v-for="issue in (gameStore[type.key as keyof typeof gameStore] as Issue[])"
          :key="issue.title"
          class="p-1 bg-white rounded border border-slate-400 cursor-pointer"
          @click="openIssue(issue)"
        >
          {{ issue.title }}
          <div v-if="issue.tags">
            <IssueTag v-for="tag in issue.tags" :tag="tag" :key="tag" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.currentIssue">
      <button
        class="fixed inset-0 w-screen h-screen bg-slate-900 opacity-50 duration-700"
        @click="closeIssue"
        aria-label="Close Issue"
      ></button>
      <div
        @click.stop
        class="flex fixed inset-y-0 right-0 flex-col w-full bg-white opacity-100 md:w-8/12"
      >
        <header class="relative">
          <div class="p-2 mr-12">
            <div>Issue #{{ state.currentIssue.id }}</div>
            <h3>{{ state.currentIssue.title }}</h3>
          </div>
          <button class="absolute top-2 right-2" @click="closeIssue">
            Close
          </button>
        </header>
        <hr />
        <div class="overflow-auto grow"></div>
      </div>
    </div>
  </div>
</template>
