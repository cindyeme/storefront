// @ts-ignore
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   sourcemap: true // Source map generation must be turned on
  // },
  plugins: [
    vue(),
    // Put the Sentry vite plugin after all other plugins
    // sentryVitePlugin({
    //   org: 'teerflex',
    //   project: 'javascript-vue-r3',
    //   // authToken:
    //   //   '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'
    //   authToken: import.meta.env.VITE_SENTRY_AUTH_TOKEN,
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
