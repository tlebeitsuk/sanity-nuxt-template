<script setup lang="ts">
defineProps({
  asset: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SanityImage :asset-id="asset._ref" auto="format">
    <template #default="{ src }">
      <nuxt-img :src="src" loading="lazy" />
    </template>
  </SanityImage>
</template>
