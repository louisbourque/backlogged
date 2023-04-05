<script setup lang="ts">
import { useGameStore } from '@/stores/gameState'

const gameStore = useGameStore()
</script>

<template>
  <div v-if="gameStore.showAboutContent" class="mx-auto max-w-2xl p-12">
    <img
      v-if="gameStore.showAboutImage"
      src="/code-g7b9ac19d1_640.png"
      class="pb-4"
    />
    <p class="mb-4 indent-2 md:text-justify">
      Welcome to "Backlogged", a simulation game that lets you experience the
      excitement and challenges of being a software developer. Created by a solo
      developer as a passion project, "Backlogged" is a labour of love that
      combines fun and learning in a unique way.
    </p>
    <p class="mb-4 indent-2 md:text-justify">
      But "Backlogged" is more than just a game - it's a tribute to the
      creativity, dedication, and teamwork that go into building software. As
      you progress through the game, you'll encounter a variety of challenges
      and opportunities to showcase your skills and advance your career. You'll
      need to manage your time wisely, prioritize tasks, and communicate
      effectively with others.
    </p>
    <p class="mb-4 indent-2 md:text-justify">
      With its addictive gameplay, beautiful graphics, and inspiring message,
      "Backlogged" is the perfect game for anyone who loves coding or wants to
      learn more about the exciting world of software development. So why not
      join us on this amazing journey and discover the joy of coding today?
    </p>
  </div>
  <div v-else class="mx-auto mt-12">// TODO: Add something here</div>
</template>
