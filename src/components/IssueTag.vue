<script setup lang="ts">
import { Play, Activity, Terminal, ClipboardList } from 'lucide-vue-next'
import { useGameStore } from '@/stores/gameState'

const gameStore = useGameStore()
const props = defineProps<{
  tag: string
}>()
</script>

<template>
  <div
    class="border-1 inline py-px px-1 text-xs bg-slate-100 rounded-lg border border-slate-300"
  >
    <Play
      v-if="tag === 'start'"
      size="12"
      class="inline"
      :class="{ 'text-green-600': gameStore.showColor }"
    />
    <Terminal
      v-else-if="tag === 'dev'"
      size="12"
      class="inline"
      :class="{ 'text-purple-800': gameStore.showColor }"
    />
    <ClipboardList
      v-else-if="tag === 'qa'"
      size="12"
      class="inline"
      :class="{ 'text-blue-800': gameStore.showColor }"
    />

    <Activity
      v-else
      size="12"
      class="inline"
      :class="{ 'text-red': gameStore.showColor }"
    />
    {{ props.tag }}
  </div>
</template>
