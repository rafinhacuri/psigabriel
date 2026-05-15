import { env } from 'node:process'

import { defineNuxtConfig } from 'nuxt/config'

const { DEV_URL, DEV_KEY, DEV_CERT } = env

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    'nuxt-security',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/hints',
    'nuxt-aos',
    '@vueuse/nuxt',
  ],
  $development: {
    security: { headers: { crossOriginEmbedderPolicy: 'unsafe-none' } },
  },
  devtools: { enabled: true },
  app: {
    head: { templateParams: { separator: '•' } },
  },

  css: ['~/assets/main.css'],
  site: {
    name: 'Psigabriel',
    description: 'Site do Psicólogo clínico Gabriel Curi',
  },
  devServer: {
    host: DEV_URL,
    https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  compatibilityDate: '2026-04-15',
  linkChecker: { enabled: false },
  security: {
    headers: {
      permissionsPolicy: {
        camera: ['self'],
      },
      contentSecurityPolicy: {
        'img-src': [
          "'self'",
          'https://assets.cbpf.br',
          'https://assets.cbpf.dev.br',
          'data:',
          'blob:',
        ],
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "'wasm-unsafe-eval'",
        ],
        'worker-src': ["'self'", 'blob:'],
      },
    },
  },
})
