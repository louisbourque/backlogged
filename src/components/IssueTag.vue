<script setup lang="ts">
import { Calculator, Play, Activity } from 'lucide-vue-next'

const props = defineProps({
  tag: { type: String, required: true },
})
</script>

<template>
  <div
    class="inline py-px px-1 text-xs bg-slate-100 rounded-lg border border-slate-300 border-1"
  >
    <Play v-if="tag === 'start'" size="12" class="inline text-green-600" />
    <Calculator
      v-else-if="tag === 'math'"
      size="12"
      class="inline text-yellow-600"
    />
    <Activity v-else size="12" class="inline text-red" />
    {{ props.tag }}
  </div>
</template>
