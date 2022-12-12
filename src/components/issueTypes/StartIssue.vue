<script setup lang="ts">
import CompleteTask from '@/components/CompleteTask.vue'
import type { Issue } from '@/stores/gameState'

const props = defineProps<{
  issue: Issue
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <CompleteTask :issue="props.issue" @close="emit('close')" />
</template>
