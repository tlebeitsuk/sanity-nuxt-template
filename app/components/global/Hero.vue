<script setup lang="ts">
defineProps<{
  data: {
    heading: string
    image: {
      asset: {
        _ref: string
        _type: string
      }
    }
  }
}>()
</script>

<template>
  <div class="flex justify-center items-center max-h-screen">
    <Image :asset="data.image.asset" />
    <div class="absolute text-3xl p-10 bg-gray/80 my-auto">{{ data.heading }}</div>
  </div>
</template>
