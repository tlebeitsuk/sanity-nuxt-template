<script setup lang="ts">
import Image from '~/components/Image.vue'

interface Page {
  title: string
  body: any[]
}

const route = useRoute()
const sanity = useSanity(route.query.preview ? 'preview' : 'default')
const page = ref<Page | null>()

// Fetch the page by slug
const query = groq`*[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0]`

const { pending, data } = await useAsyncData('page', () => sanity.fetch<Page>(query, { slug: route.params.slug }))
page.value = data.value

const serializers = {
  types: {
    image: Image,
  },
}

onMounted(() => {
  if (route.query.preview) {
    sanity.client.listen(query, { slug: route.params.slug }).subscribe((event: { type: string; result: Page }) => {
      console.log(event)
      page.value = event.result
    })
  }
})
</script>

<template>
  <div class="p-2">
    <h1 v-if="pending">Loading...</h1>
    <SanityContent v-else :blocks="page?.body" :serializers="serializers" />
  </div>
</template>
