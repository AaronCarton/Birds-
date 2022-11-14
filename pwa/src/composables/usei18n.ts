import { createI18n } from 'vue-i18n'

const AVAILABLE_LOCALES = ['en', 'nl', 'zh']

const i18n = createI18n({
  locale: 'nl',
  fallbackLocale: 'en',
  availableLocales: AVAILABLE_LOCALES,
})

const loadLocales = async (locale: string = 'en') => {
  if (!AVAILABLE_LOCALES.includes(locale)) return

  i18n.global.locale = locale as any
  i18n.global.setLocaleMessage(
    locale,
    await import(`../locales/${locale}.json`).then((m) => m[locale]),
  )
}

export default () => {
  return {
    AVAILABLE_LOCALES,
    i18n,
    t: i18n.global.t,

    loadLocales,
  }
}
