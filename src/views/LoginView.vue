<script setup lang="ts">
import { useGameStore } from '@/stores/gameState'
import { useRouter } from 'vue-router'

const gameState = useGameStore()
let name = ''
const router = useRouter()

const handleSubmit = (newName: string) => {
  gameState.setName(newName)
  router.push('/home')
}
</script>

<template>
  <div class="grid place-items-center h-screen">
    <div class="min-w-[24rem] bg-white rounded-md shadow-md">
      <div class="m-4">
        <h4 class="text-2xl font-semibold text-gray-700">Login to continue</h4>
        <form class="space-y-2" @submit.prevent="handleSubmit(name)">
          <label for="name" class="sr-only"> Name: </label>
          <input
            v-model="name"
            type="text"
            name="name"
            placeholder="Name"
            class="block relative focus:z-10 py-2 px-3 w-full text-gray-900 placeholder:text-gray-500 rounded-none rounded-t-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 appearance-none sm:text-sm"
          />

          <button
            type="submit"
            class="group flex relative justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
