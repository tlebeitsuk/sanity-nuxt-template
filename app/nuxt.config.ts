// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  modules: [
    'nuxt-security',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/sanity',
  ],
  extends: ['nuxt-seo-kit'],
  typescript: {
    strict: true,
    // typeCheck: true,
    shim: false,
  },
})
