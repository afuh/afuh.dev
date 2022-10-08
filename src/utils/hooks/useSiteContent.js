import { useStaticQuery, graphql } from 'gatsby'

export const useSiteContent = () => {
  const { content } = useStaticQuery(
    graphql`
      {
        content: contentfulSiteContent {
          personalIntro {
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
    `,
  )

  return content
}
