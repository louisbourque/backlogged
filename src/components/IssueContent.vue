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
  if (payload.state === 'inProgress' && props.issue.state === 'todo') {
    payload.started = new Date().getTime()
  }
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
      @close="emit('close')"
    />
    <div v-else-if="props.issue.state === 'todo'" class="text-right">
      <button
        class="border-1 rounded-lg border p-2 text-gray-50"
        :class="
          gameStore.showColor
            ? 'bg-green-600 border-green-800'
            : 'text-slate-800'
        "
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
