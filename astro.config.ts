import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { visit } from 'unist-util-visit'

/**
 * A custom remark plugin that adds rel="noopener noreferrer" and target="_blank" to external links.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interceptExternalLinks = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node.tagName === 'a' && node.properties?.href?.startsWith('https')) {
      node.properties.rel = ['noopener', 'noreferrer']
      node.properties.target = '_blank'
    }
  })
}

// https://astro.build/config
export default defineConfig({
  // https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
  site: process.env.DEPLOY_PRIME_URL || 'https://afuh.dev',
  integrations: [sitemap()],
  compressHTML: true,
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    gfm: false,
    rehypePlugins: [interceptExternalLinks],
  },
})
