import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://afuh.dev/',
  integrations: [sitemap()],
  compressHTML: true,
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
})
