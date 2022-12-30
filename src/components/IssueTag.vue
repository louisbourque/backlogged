<script setup lang="ts">
import {
  Play,
  Activity,
  Terminal,
  ClipboardList,
  Microscope,
  Briefcase,
  Server,
} from 'lucide-vue-next'
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
    <Microscope
      v-else-if="tag === 'research'"
      size="12"
      class="inline"
      :class="{ 'text-red-800': gameStore.showColor }"
    />
    <Briefcase
      v-else-if="tag === 'business'"
      size="12"
      class="inline"
      :class="{ 'text-zinc-700': gameStore.showColor }"
    />
    <Server
      v-else-if="tag === 'ops'"
      size="12"
      class="inline"
      :class="{ 'text-teal-700': gameStore.showColor }"
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
