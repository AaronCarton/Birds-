import { App as VueApp, createApp } from 'vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import App from './App.vue'

import router from './bootstrap/router'
import useAuthentication from './composables/useAuthentication'
import usei18n from './composables/usei18n'

const app: VueApp = createApp(App)

const { restoreUser } = useAuthentication()
const { i18n, loadLocales } = usei18n()

// i18n
loadLocales('en')
app.use(i18n)
;(async function () {
  await restoreUser()

  app.use(router)
  app.mount('#app')
})()
