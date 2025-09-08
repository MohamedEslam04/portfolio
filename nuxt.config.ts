// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@eslamdevui/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['@eslamdevui/ui'],
    analyze: false
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // icon: {
  //   clientBundle: {
  //     scan: {
  //       globInclude: ['components/**/*.vue', /* ... */],
  //       globExclude: ['node_modules', 'dist', /* ... */],
  //     },
  //   },
  //   customCollections: [{
  //     prefix: 'custom',
  //     dir: './app/assets/icons'
  //   }]
  // },

  i18n: {
    // langDir: 'app/i18n/locales',
    skipSettingLocaleOnNavigate: true,
    strategy: 'prefix_except_default',
    locales: [
      { code: 'ar', name: 'Arabic', dir: 'rtl', language: 'ar-AR', file: 'ar.ts' },
      { code: 'en', name: 'English', dir: 'ltr', language: 'en-US', file: 'en.ts' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
      redirectOn: 'root'
    }
  }
})
