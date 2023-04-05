<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import TopBar from '@/components/TopBar.vue'

const gameStore = useGameStore()
gameStore.loadGameState()
</script>

<template>
  <div
    class="flex h-full flex-col"
    :class="{ 'selection-color': gameStore.selectionColor }"
  >
    <TopBar v-if="gameStore.showNavigationSection" />
    <main
      class="flex w-full grow bg-white"
      :class="{ blotch: gameStore.showBlotch }"
    >
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.blotch {
  background: radial-gradient(
    at 5% 95%,
    rgba(165, 180, 252, 0.5) 0,
    transparent 35%
  );
}

.selection-color >>> ::selection {
  color: white;
  background: #420042;
}
</style>
