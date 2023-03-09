// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@unocss/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/sanity',
    'nuxt-headlessui',
    'nuxt-icon',
  ],
  extends: ['nuxt-seo-kit'],
  sanity: {
    projectId: 'q5xwb92a',
    dataset: 'production',
    additionalClients: {
      preview: {
        withCredentials: true,
        useCdn: false,
      },
    },
  },
  unocss: {
    preflight: true,
  },
  image: {
    domains: ['https://cdn.sanity.io'],
  },
  typescript: {
    strict: true,
    // typeCheck: true,
    shim: false,
  },
})
