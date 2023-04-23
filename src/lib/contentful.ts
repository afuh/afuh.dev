import contentful from 'contentful'

type ContentfulProject = {
  title: string
  seoDescription: string
  content: string
  url: string
  code: string
  slug: string
  image: contentful.Asset
}

type ContentfulProjects = {
  category: string
  projects: contentful.Entry<ContentfulProject>[]
}

type ContentfulSiteContent = {
  title: string
  shortDescription: string
  description: string
  seoDescription: string
}

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: `${import.meta.env.DEV ? 'preview' : 'cdn'}.contentful.com`,
})

export const getProjects = async () => {
  const entry = await contentfulClient.getEntry<ContentfulProjects>('21ffolOP2uKzQxQpMdS6WS')

  return entry.fields.projects.map(({ fields }) => {
    const image = fields.image.fields
    const imageUrl = `https:${image.file.url}`

    return {
      title: fields.title,
      slug: fields.slug,
      content: fields.content,
      url: fields.url,
      codeUrl: fields.code,
      imageUrl,
      seo: {
        description: fields.seoDescription,
        image: {
          url: imageUrl,
          contentType: image.file.contentType,
          size: image.file.details.image,
        },
      },
    }
  })
}

export const getSiteContent = async () => {
  const entry = await contentfulClient.getEntry<ContentfulSiteContent>('7CnuGVUYG9vsVNBx3SJWxa')

  return entry.fields
}
