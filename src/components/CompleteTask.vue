<script setup lang="ts">
import { reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useGameStore, type Issue } from '@/stores/gameState'

const PROGRESS_MULTIPLIER = import.meta.env.DEV ? 0 : 0.5
const PROGRESS_ADD = 1

const props = defineProps<{
  issue: Issue
}>()
const emit = defineEmits<{
  (e: 'update', value: unknown): void
  (e: 'close', value: unknown): void
}>()

const gameStore = useGameStore()
const update = (payload: Record<string, unknown>) => {
  if (payload.state === 'done') {
    emit('close', undefined)
  }
  gameStore.updateIssue({
    ...props.issue,
    ...payload,
  })
}

const state: { now: number; intervalId: number | null } = reactive({
  now: new Date().getTime(),
  intervalId: null,
})
const elapsedTime = computed(() => {
  return props.issue.started ? state.now - props.issue.started : 0
})
const maxValue = (props.issue.id ?? 1) * PROGRESS_MULTIPLIER + PROGRESS_ADD
const readyToComplete = computed(() => {
  return elapsedTime.value / 1000 >= maxValue
})

onMounted(() => {
  state.intervalId = setInterval(
    () => {
      state.now = new Date().getTime()
    },
    gameStore.betterProgressBar ? 50 : 300
  )
})

onBeforeUnmount(() => {
  if (state.intervalId) {
    clearInterval(state.intervalId)
  }
})

const handleCompleteClick = () => {
  if (!readyToComplete.value) {
    return
  }
  update({ state: 'done' })
}
</script>

<template>
  <div class="flex justify-between">
    <label class="mx-auto"
      >{{ props.issue.progress_label }}:
      <progress
        :max="maxValue"
        :value="elapsedTime / 1000"
        class="bg-gray-300"
        :class="gameStore.showColor ? 'show_color' : ''"
      >
        {{ Math.min(Math.round((elapsedTime / 1000 / maxValue) * 100), 100) }}%
      </progress></label
    >
    <button
      :aria-disabled="readyToComplete"
      class="border-1 rounded-lg border p-2 text-gray-50"
      :class="
        gameStore.showColor
          ? readyToComplete
            ? 'bg-green-600 border-green-800'
            : 'bg-green-300 border-green-300'
          : readyToComplete
          ? 'text-slate-800'
          : 'text-slate-500'
      "
      @click="handleCompleteClick"
    >
      Complete Task
    </button>
  </div>
</template>

<style scoped>
progress::-webkit-progress-bar {
  @apply bg-gray-300;
}
progress::-webkit-progress-value {
  @apply bg-gray-800;
}
progress[value]::-moz-progress-bar {
  @apply bg-gray-800;
}
progress::-webkit-progress-value.show_color {
  @apply bg-green-600;
}
progress[value]::-moz-progress-bar.show_color {
  @apply bg-green-600;
}
</style>
