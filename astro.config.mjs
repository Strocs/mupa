import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://mupa.cl',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/arquitectas-referentes': '/',
    '/arquitectas-vitalicias': '/'
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
})
