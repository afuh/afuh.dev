import { useStaticQuery, graphql } from 'gatsby'

export const useSiteContent = () => {
  const { content } = useStaticQuery(
    graphql`
      {
        content: contentfulSiteContent {
          personalIntro {
            md: childMarkdownRemark {
              html
              excerpt(pruneLength: 120)
            }
          }
        }
      }
    `,
  )

  return content
}
