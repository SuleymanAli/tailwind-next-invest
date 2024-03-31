<script setup>
import IconProgress from "../../components/Icons/Progress.vue";
</script>

<template>
  <div
    class="text-grey bg-[url('/images/graph-bg.png')] bg-cover bg-center bg-no-repeat py-24"
  >
    <div class="container flex">
      <div class="basis-1/2">
        <span class="mb-10 inline-flex">
          <IconProgress />
        </span>
        <p class="mb-6 text-5xl font-bold">$7M+ paid out to investors</p>
        <p class="text-grey-light text-2xl">
          Next Invest has already paid out over $7M in cash returns to
          investors. Earn potential cash payments through unique revenue-share
          and debt financing investments.
        </p>
      </div>
      <div class="ml-auto flex basis-5/12 justify-center">
        <img src="/images/graph-chart.png" alt="" class="object-cover" />
      </div>
    </div>
  </div>
</template>
