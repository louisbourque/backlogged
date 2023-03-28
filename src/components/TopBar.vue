<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGameStore } from '@/stores/gameState'
import { GitBranchPlus } from 'lucide-vue-next'

const gameState = useGameStore()
</script>

<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <RouterLink to="/board">
            <span class="sr-only">Backlogged</span>
            <GitBranchPlus class="h-8 w-auto text-emerald-800 sm:h-10" alt="" />
          </RouterLink>
        </div>
        <nav class="flex space-x-10">
          <RouterLink
            v-if="gameState.showAboutLink"
            to="/board"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            :class="{ 'font-bold text-gray-700': $route.fullPath === '/board' }"
            >Board</RouterLink
          >
          <RouterLink
            v-if="gameState.showAboutLink"
            to="/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            :class="{ 'font-bold text-gray-700': $route.fullPath === '/about' }"
            >About</RouterLink
          >
          <a
            v-if="false"
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Docs</a
          >

          <div v-if="false" class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-expanded="false"
            >
              <span>More</span>
              <!--
              Heroicon name: mini/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            v-if="false"
            href="#"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >Sign up</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
