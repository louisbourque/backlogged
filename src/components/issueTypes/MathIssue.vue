<script setup lang="ts">
import { ref } from 'vue'
import type { Issue } from '@/stores/gameState'

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
      {{ props.issue.expression }} =
      <input
        v-model="answer"
        type="text"
        class="border-1 px-2 w-12 border border-black"
      />
    </div>
    <div class="text-right">
      <button
        v-if="props.issue.answer === answer"
        class="border-1 p-2 text-gray-50 bg-green-600 rounded-lg border border-green-800"
        @click="emit('update', { state: 'done' })"
      >
        Complete Task
      </button>
    </div>
  </div>
</template>
