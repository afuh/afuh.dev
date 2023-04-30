import React from 'react'
import PropTypes from 'prop-types'

import { useSiteContent, useSiteMeta } from '../../utils/hooks'

const checkUrl = (url) => (url.match(/^https/i) ? url : 'https:' + url)

export const SEO = ({ title, description, image, pathname }) => {
  const { title: defaultTitle, image: defaultImage, siteUrl } = useSiteMeta()
  const { description: contentfulDescription } = useSiteContent()

  const seo = {
    title: title || defaultTitle,
    description: description || contentfulDescription.md.excerpt,
    url: `${siteUrl}${pathname || ''}`,
    image: {
      url: image ? checkUrl(image.url) : `${siteUrl}${defaultImage}`,
      contentType: image ? image.contentType : 'image/jpeg',
      size: image ? image.size : { width: '720', height: '360' },
    },
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image.url} />

      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:image:type" content={seo.image.contentType} />
      <meta property="og:image:width" content={seo.image.size.width} />
      <meta property="og:image:height" content={seo.image.size.height} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image.url} />
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
}
