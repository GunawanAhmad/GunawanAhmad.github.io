// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', '@unocss/nuxt'],
  sanity: {
    projectId: '0wqodvjq',
    apiVersion: '2021-10-21',
    dataset: 'portfolio',
  },
  runtimeConfig: {
    sanity: {
      token: process.env.NUXT_SANITY_TOKEN,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet',
        },
      ],
    },
  },
});
