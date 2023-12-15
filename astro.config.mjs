import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  site: 'https://mupa.cl',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/arquitectas-referentes': '/',
    '/arquitectas-vitalicias': '/'
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
