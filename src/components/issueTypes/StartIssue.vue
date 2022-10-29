<script setup lang="ts">
import { useGameStore } from '@/stores/gameState'

const gameStore = useGameStore()
const emit = defineEmits<{
  (e: 'update', value: unknown): void
}>()
</script>

<template>
  <div class="text-right">
    <button
      class="border-1 p-2 text-gray-50 rounded-lg border"
      :class="
        gameStore.showColor ? 'bg-green-600 border-green-800' : 'text-slate-800'
      "
      @click="emit('update', { state: 'done' })"
    >
      Complete Task
    </button>
  </div>
</template>
