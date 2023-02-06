// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  runtimeConfig: {
    public: {
      github: {
        clientId: process.env.NUXT_PUBLIC_GITHUB_CLIENT_ID
      },
      issues: {
        sseUrl: process.env.NUXT_PUBLIC_ISSUES_SSE_URL
      }
    },
    github: {
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    }
  }
})
