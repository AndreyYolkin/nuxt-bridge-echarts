import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  head: {
    title: 'nuxt-bridge-echarts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // https://github.com/nuxt/bridge/issues/25#issuecomment-1097946846
  alias: {
    tslib: 'tslib/tslib.es6.js'
  },
  build: {
    // Almost from https://github.com/nuxt/framework/discussions/2474#discussioncomment-1850092
    transpile: [/echarts/, 'zrender']
  }
})
