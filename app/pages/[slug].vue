<script setup lang="ts">
import Image from '~/components/Image.vue'

interface Page {
  title: string
  body: any[]
}

const route = useRoute()
// Use preview client if preview query param is set
const sanity = useSanity(route.query.preview ? 'preview' : 'default')
const page = ref<Page | null>()

// Fetch the page by slug
const query = groq`*[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0]`

const { data } = await useAsyncData('page', () => sanity.fetch<Page>(query, { slug: route.params.slug }))
page.value = data.value

const serializers = {
  types: {
    image: Image,
  },
}

onMounted(() => {
  if (route.query.preview) {
    // @ts-ignore
    sanity.client.listen(query, { slug: route.params.slug }).subscribe((event: { type: string; result: Page }) => {
      page.value = event.result
    })
  }
})
</script>

<template>
  <!--  <Breadcrumbs>
      <template #breadcrumb="{ to, title }" class="!flex w-full">
        <NuxtLink :to="to">
          {{ title }}
        </NuxtLink>
      </template>
    </Breadcrumbs> -->

  <SanityContent :blocks="page?.body" :serializers="serializers" />
</template>
