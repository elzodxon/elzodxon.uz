import axios from 'axios'
require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3002, // default: 3005
    host: '0.0.0.0', // default: localhost
  },
  env: {
    VUE_APP_API_URL: process.env.VUE_APP_API_URL,
  },
  ssr: true,
  loading: true,
  target: 'static',
  head: {
    title: 'Elzodxon Sharofaddinov ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/style.scss',
    '@assets/style/media.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        threads: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru.js',
          },
          {
            code: 'uz',
            file: 'uz.js',
          },
          {
            code: 'oz',
            file: 'oz.js',
          },
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'oz',
        detectBrowserLanguage: false,
        lazy: true,
        vueI18nLoader: true,
        langDir: 'languages/',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.VUE_APP_API_URL || 'https://api.elzodxon.uz/api/v1/',
    },
  },
  globals: {
    axios,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
