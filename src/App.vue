<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import Topbar from '@/components/Topbar.vue'

const gameState = useGameStore()
</script>

<template>
  <div class="flex flex-col h-full">
    <Topbar v-if="gameState.topbar" />
    <main class="flex grow w-full bg-white">
      <RouterView />
    </main>
  </div>
</template>
