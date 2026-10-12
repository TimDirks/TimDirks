import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* <Nuxt root config> */
  app: {
    head: {
      title: 'Tim Dirks',
    },
  },

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [
        tailwindcss(),
    ],
  },

  css: [
    '~/assets/css/main.css',
  ],
  /* </Nuxt root config> */

  compatibilityDate: '2025-07-15'
})
