<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore, type Issue } from '@/stores/gameState'

const gameStore = useGameStore()
const props = defineProps<{
  issue: Issue
}>()
const emit = defineEmits<{
  (e: 'update', value: unknown): void
}>()

const answer = ref('')
</script>

<template>
  <div class="p-4">
    <div>
      <input
        v-model="answer"
        type="text"
        class="border-1 px-2 w-12 border border-black"
      />
    </div>
    <div class="text-right">
      <button
        v-if="props.issue.answer === answer"
        class="border-1 p-2 text-gray-50 rounded-lg border"
        :class="
          gameStore.showColor
            ? 'bg-green-600 border-green-800'
            : 'text-slate-800'
        "
        @click="emit('update', { state: 'done' })"
      >
        Complete Task
      </button>
    </div>
  </div>
</template>
