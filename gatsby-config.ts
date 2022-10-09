import type { GatsbyConfig } from 'gatsby'
import * as dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const metadata = {
  title: 'Axel Fuhrmann',
  description: 'Software Engineer',
  siteUrl: 'https://afuh.dev',
  image: '/images/cover-720x360.jpg',
  themeColor: '#FEFEFE',
  backgroundColor: '#212129',
}

const config: GatsbyConfig = {
  siteMetadata: {
    ...metadata,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: metadata.title,
        short_name: metadata.title,
        description: metadata.description,
        start_url: '/',
        background_color: metadata.backgroundColor,
        theme_color: metadata.themeColor,
        display: 'standalone',
        icon: 'src/assets/icon-512x512.png',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.TOKEN,
        host: (process.env.ENABLE_GATSBY_REFRESH_ENDPOINT ? 'preview' : 'cdn') + '.contentful.com',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.icon\.svg$/,
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

export default config
