import { graphql } from "gatsby"

export const projectFragment = graphql`
  fragment projectInfo on ContentfulProject {
    id
    title
    slug
    featured
    image {
      fixed(width: 300) {
        ...GatsbyContentfulFixed
      }
      fluid(maxWidth: 960) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    content {
      childMarkdownRemark {
        excerpt
      }
    }
  }
`
