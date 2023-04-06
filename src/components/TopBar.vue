<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import { GitBranchPlus } from 'lucide-vue-next'

const gameState = useGameStore()
</script>

<template>
  <div
    class="relative bg-white"
    :class="{ 'gradient-topbar': gameState.topNavGradient }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <RouterLink to="/board">
            <span class="sr-only">Backlogged</span>
            <GitBranchPlus
              class="h-8 w-auto text-emerald-800"
              :class="gameState.logoSizeIncrease ? 'sm:h-12' : 'sm:h-10'"
              alt=""
            />
          </RouterLink>
        </div>
        <nav class="flex space-x-10">
          <RouterLink
            v-if="gameState.showAboutLink"
            to="/board"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            :class="{
              'font-bold text-gray-700': $route.fullPath === '/board',
              'text-xl': gameState.topNavFontsize,
            }"
            >Board</RouterLink
          >
          <RouterLink
            v-if="gameState.showAboutLink"
            to="/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            :class="{
              'font-bold text-gray-700': $route.fullPath === '/about',
              'text-xl': gameState.topNavFontsize,
            }"
            >About</RouterLink
          >
        </nav>
        <div class="hidden md:flex md:flex-1 lg:w-0"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-topbar {
  position: relative;
  transform-style: preserve-3d;
}
.gradient-topbar::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(
    from 90deg at 40% -25%,
    #ffd700,
    #f79d03,
    #ee6907,
    #e6390a,
    #de0d0d,
    #d61039,
    #cf1261,
    #c71585,
    #cf1261,
    #d61039,
    #de0d0d,
    #ee6907,
    #f79d03,
    #ffd700,
    #ffd700,
    #ffd700
  );
  filter: blur(8px);
  transform: translate3d(0px, 0px, -1px);
  pointer-events: none;
}
</style>
