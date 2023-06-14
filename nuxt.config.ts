// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxt/content', ['@nuxtjs/google-fonts', {
    families: {
      "Space Mono": true
    }
  }], 'nuxt-icon'],
})