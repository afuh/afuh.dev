require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteConfig = require('./config/siteConfig')

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: siteConfig.accent,
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: [`400`, `700`, '800']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-external-links'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        description: siteConfig.description,
        start_url: "/",
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: 'minimal-ui',
        icon: 'src/assets/icon-512x512.png'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.TOKEN
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
}
