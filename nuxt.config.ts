// https://nuxt.com/docs/api/configuration/nuxt-config
// import {defineNuxtConfig} from 'nuxt'
// import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig ({
  // compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    postcss: {
      postcssOptions: require('./options.postcss'),
    },
    configPath: 'tailwind.config.js',
    // content: ['tailwind.config.js'],
    // exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: '2024-12-18',
})