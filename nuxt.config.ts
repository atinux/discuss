import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    ISSUES_SSE_URL: process.env.ISSUES_SSE_URL,
  },
  buildModules: ['@unocss/nuxt'],
  unocss: {
    preflight: true,
    icons: true,
  },
})
