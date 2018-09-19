require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./siteConfig')

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
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
        name: config.title,
        short_name: config.title,
        description: config.description,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
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
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/sw.js": [
            "Cache-Control: no-cache"
          ]
        }
      }
    },
    'gatsby-plugin-netlify-cache'
  ]
}
