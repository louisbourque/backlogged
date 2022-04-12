<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGameStore } from '@/stores/gameState'

const gameState = useGameStore()
</script>

<template>
  <div class="py-2 px-4 bg-indigo-600 lg:w-72">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline w-8 h-8 text-white lg:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <div class="hidden lg:block">
      <div class="my-2 mb-6">
        <h1 class="text-2xl font-bold text-white">Admin Dashboard</h1>
      </div>
      <nav>
        <RouterLink
          v-for="link in gameState.sideLinks"
          :key="link.to"
          :to="link.to"
          class="inline-block py-2 px-3 mb-2 w-full h-full font-bold text-white hover:bg-gray-800 rounded hover:shadow"
          ><img
            :src="`/src/assets/${link.icon}.svg`"
            class="inline -mt-1 mr-1 invert"
          />
          {{ link.text }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
