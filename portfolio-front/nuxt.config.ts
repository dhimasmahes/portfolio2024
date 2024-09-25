// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-graphql-client',
  ],
  googleFonts:{
    families: {
      'League Spartan': true,
      'Libre Baskerville': true,
      Montserrat: true,
      "Bebas Neue": true
    },
    display: "swap",
  },
})