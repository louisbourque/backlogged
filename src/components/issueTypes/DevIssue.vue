<script setup lang="ts">
import type { Issue } from '@/stores/gameState'
import CompleteTask from '@/components/CompleteTask.vue'

const props = defineProps<{
  issue: Issue
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div>
    <CompleteTask :issue="props.issue" @close="emit('close')" />
  </div>
</template>
