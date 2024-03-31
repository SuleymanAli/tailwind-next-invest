<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="container">
    <div class="my-40">
      <!-- Intro -->
      <div class="mb-14 text-center">
        <p class="text-grey mb-6 text-5xl">Offerings open for investment</p>
        <p class="text-grey-light text-2xl">
          Explore pre-vetted investment opportunities available in a growing
          number of industry categories.
        </p>
      </div>
      <!-- Cards -->
      <div class="mb-20 flex flex-wrap">
        <template v-for="n in 6">
          <Card :imageUrl="`/images/card${n}.png`" />
        </template>
      </div>
      <!-- Button -->
      <div class="flex justify-center">
        <button
          class="border border-secondary px-12 py-6 font-bold uppercase text-secondary"
        >
          View All Projects
        </button>
      </div>
    </div>
  </div>
</template>
