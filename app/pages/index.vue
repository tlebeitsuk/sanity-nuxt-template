<script setup lang="ts">
const query = groq`*[_type == "page"]{title, slug}`
const { data } = useSanityQuery(query)
</script>

<template>
  <ul class="flex p-2 gap-2">
    <li v-for="item in data" :key="item" class="py-2 px-4 bg-blue text-light rounded">
      <NuxtLink :to="item.slug.current">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>
