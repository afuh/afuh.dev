import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://afuh.dev/',
  integrations: [sitemap(), prefetch()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
})
