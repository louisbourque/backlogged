<script setup lang="ts">
import { useGameStore, type Issue } from '@/stores/gameState'

const gameStore = useGameStore()

const issueTypes = [
  { key: 'todoIssues', title: 'Todo' },
  { key: 'inProgressIssues', title: 'In Progress' },
  { key: 'doneIssues', title: 'Done' },
]
</script>

<template>
  <div class="flex flex-col p-4 text-gray-800">
    <h1 class="mb-2">Backlog</h1>

    <div class="flex flex-row gap-4 h-full">
      <div
        v-for="type in issueTypes"
        :key="type.key"
        class="flex flex-col flex-none p-2 w-64 bg-slate-200 rounded-md gap-2"
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
          class="bg-white rounded border-slate-400 border p-1"
        >
          {{ issue.title }}
        </div>
      </div>
    </div>
  </div>
</template>
