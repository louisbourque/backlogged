<script setup lang="ts">
import { useGameStore, type Issue } from '@/stores/gameState'
const props = defineProps<{
  issue: Issue
}>()
const emit = defineEmits<{
  (e: 'update', value: unknown): void
  (e: 'close', value: unknown): void
}>()

const gameStore = useGameStore()
const update = (payload: Record<string, unknown>) => {
  if (payload.state === 'inProgress' && props.issue.state === 'todo') {
    payload.started = new Date().getTime()
  }
  if (payload.state === 'done') {
    emit('close', undefined)
  }
  gameStore.updateIssue({
    ...props.issue,
    ...payload,
  })
}
</script>

<template>
  <div class="text-right">
    <button
      class="border-1 p-2 text-gray-50 rounded-lg border"
      :class="
        gameStore.showColor ? 'bg-green-600 border-green-800' : 'text-slate-800'
      "
      @click="update({ state: 'done' })"
    >
      Complete Task
    </button>
  </div>
</template>
