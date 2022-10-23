<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import Topbar from '@/components/Topbar.vue'

const gameState = useGameStore()
</script>

<template>
  <div class="flex h-screen">
    <Topbar v-if="gameState.topbar" />
    <main class="flex-1 w-full bg-gray-200 lg:w-full">
      <RouterView />
    </main>
  </div>
</template>
