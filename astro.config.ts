import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://afuh.dev',
  integrations: [
    sitemap(),
    prefetch(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
