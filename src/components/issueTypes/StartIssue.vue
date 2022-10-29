<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', value: unknown): void
}>()
</script>

<template>
  <div class="text-right">
    <button
      class="border-1 p-2 text-gray-50 bg-green-600 rounded-lg border border-green-800"
      @click="emit('update', { state: 'done' })"
    >
      Complete Task
    </button>
  </div>
</template>
