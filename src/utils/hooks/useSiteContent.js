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
        social {
          name
          url
        }
      }
    }
    `
  )

  return content
}
