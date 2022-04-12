<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import Sidebar from '@/components/Sidebar.vue'

const gameState = useGameStore()
</script>

<template>
  <div class="flex h-screen">
    <Sidebar v-if="gameState.name" />
    <main class="flex-1 w-full bg-gray-200 lg:w-full">
      <RouterView />
    </main>
  </div>
</template>
