<script setup lang="ts">
const query = groq`*[_type == "page" && slug.current == "home"]`
const { data } = useSanityQuery(query)
</script>

<template>
  <pre>{{ data }}</pre>
</template>
