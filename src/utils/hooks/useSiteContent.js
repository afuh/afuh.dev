import { useStaticQuery, graphql } from 'gatsby'

export const useSiteContent = () => {
  const { content } = useStaticQuery(
    graphql`{
      content: contentfulSiteContent {
        contactPage {
          md: childMarkdownRemark {
            html
          }
        }
        aboutPage {
          md: childMarkdownRemark {
            html
          }
        }
        email
        social {
          name
          url
        }
        portfolios {
          name
          url
        }
      }
    }
    `
  )

  return content
}
