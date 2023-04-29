import contentful from 'contentful'
import type { SEO } from '../types'

type ContentfulSEO = {
  seoDescription: string
  seoImage: contentful.Asset
}

type ContentfulProject = ContentfulSEO & {
  title: string
  content: string
  url: string
  code: string
  slug: string
}

type ContentfulSiteContent = ContentfulSEO & {
  title: string
  shortDescription: string
  description: string
}

type ContentfulProjects = {
  projects: contentful.Entry<ContentfulProject>[]
}

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: `${import.meta.env.DEV ? 'preview' : 'cdn'}.contentful.com`,
})

const getSEO = ({ seoDescription, seoImage }: ContentfulSEO): SEO => ({
  description: seoDescription,
  image: {
    url: `https:${seoImage.fields.file.url}`,
    contentType: seoImage.fields.file.contentType,
    size: {
      width: seoImage.fields.file.details.image?.width.toString() || '',
      height: seoImage.fields.file.details.image?.height.toString() || '',
    },
  },
})

export const getProjects = async () => {
  const { fields } = await contentfulClient.getEntry<ContentfulProjects>('21ffolOP2uKzQxQpMdS6WS')

  return fields.projects.map(({ fields }) => ({
    title: fields.title,
    slug: fields.slug,
    content: fields.content,
    url: fields.url,
    codeUrl: fields.code,
    seo: getSEO(fields),
  }))
}

export const getSiteContent = async () => {
  const { fields } = await contentfulClient.getEntry<ContentfulSiteContent>('7CnuGVUYG9vsVNBx3SJWxa')

  return {
    title: fields.title,
    shortDescription: fields.shortDescription,
    description: fields.description,
    seo: getSEO(fields),
  }
}
