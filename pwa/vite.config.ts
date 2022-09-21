import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  // build: {},

  plugins: [
    vue(),
    Unocss({
      rules: [['font-theme', { 'font-family': 'din-condensed, sans-serif' }]],
    }),
    VitePluginFonts({
      typekit: { id: 'ctj6wle', defer: true, injectTo: 'head' },
    }),
  ],
})
