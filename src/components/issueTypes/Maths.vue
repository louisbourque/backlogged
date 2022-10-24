<script setup lang="ts">
import type { Issue } from '@/stores/gameState'

const props = defineProps<{
  issue: Issue
}>()
</script>

<template>
  <div class="p-4">
    <div v-html="props.issue.description" class="pb-4" />
  </div>
</template>
