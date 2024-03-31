<script setup>
import { defineProps } from "vue";
const props = defineProps({
  imageUrl: {
    type: String,
    default: "/images/card1.png",
  },
});
</script>

<template>
  <div class="basis-4/12 px-3.5 py-5">
    <div
      class="hover:shadow-hover text-grey cursor-pointer overflow-hidden shadow transition duration-500 ease-in-out"
    >
      <!-- Image -->
      <div class="relative overflow-hidden">
        <div
          class="text-2xs absolute left-6 top-6 space-x-2 font-bold uppercase"
        >
          <span class="bg-white/80 px-3 py-2">House</span>
          <span class="bg-white/80 px-3 py-2">Family Business</span>
        </div>
        <img :src="imageUrl" alt="" class="h-auto w-full object-cover" />
      </div>
      <!-- Body -->
      <div class="p-6">
        <!-- Title -->
        <div class="pb-6">
          <p class="text-2xl font-bold">Oxalis</p>
          <p class="text-grey-light">Brooklyn, NY</p>
        </div>
        <!-- Content -->
        <div class="pb-6">
          <p>
            A recognized leader in language immersion & early education, opening
            second school.
          </p>
        </div>
        <!-- Bar -->
        <div>
          <div class="relative mb-2 h-2 w-full bg-[#ECECEC]">
            <div class="absolute left-0 top-0 h-full w-3/5 bg-primary"></div>
          </div>
          <div>
            <span class="font-bold text-primary">$574,920</span>
            <span class="text-sm"> raised of $1,000,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
