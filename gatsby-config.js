require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteConfig = require('./config/siteConfig')

module.exports = {
  flags: {
    FAST_REFRESH: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#78ff78',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,700,800'],
        },
      },
    },
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
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        description: siteConfig.description,
        start_url: '/',
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
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
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
}
