<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import TopBar from '@/components/TopBar.vue'

const gameState = useGameStore()
gameState.loadGameState()
</script>

<template>
  <div class="flex flex-col h-full">
    <TopBar v-if="gameState.topbar" />
    <main class="flex grow w-full bg-white">
      <RouterView />
    </main>
  </div>
</template>
