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

  modules: [
    '@nuxtjs/google-fonts',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/typography.css',
  ],
  /* </Nuxt root config> */

  /* <Nuxt module options> */
  // Nuxt Google Fonts (https://google-fonts.nuxtjs.org/)
  googleFonts: {
    display: 'swap',
    families: {
      Poppins: {
        wght: '600',
      },
      'Roboto Mono': {
        wght: '100..700',
      },
    },
  },
  /* </Nuxt module options> */

  compatibilityDate: '2025-07-15'
})
