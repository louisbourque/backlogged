<script setup lang="ts">
import { useGameStore, type Issue } from '@/stores/gameState'
import * as issueTypes from '@/components/issueTypes'

const gameStore = useGameStore()

const props = defineProps<{
  issue: Issue
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const update = (payload: Record<string, unknown>) => {
  if (payload.state === 'done') {
    emit('close')
  }
  gameStore.updateIssue({
    ...props.issue,
    ...payload,
  })
}
</script>

<template>
  <div class="p-4">
    <div v-html="props.issue.description" class="pb-4" />
    <component
      v-if="props.issue.state === 'inProgress'"
      :is="issueTypes[props.issue.type as keyof typeof issueTypes]"
      :issue="props.issue"
      @update="update"
    />
    <div v-else-if="props.issue.state === 'todo'" class="text-right">
      <button
        class="border-1 p-2 text-gray-50 bg-green-600 rounded-lg border border-green-800"
        @click="update({ state: 'inProgress' })"
      >
        Get Started
      </button>
    </div>
    <div v-else>
      Great work! This task is complete. Have a look at your other tasks to
      continue.
    </div>
  </div>
</template>
