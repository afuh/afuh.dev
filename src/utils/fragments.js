import { graphql } from "gatsby"

export const projectFragment = graphql`
  fragment projectInfo on ContentfulProject {
    id
    title
    slug
    featured
    image {
      fixed(width: 300) {
        height
        width
        src
        srcSet
      }
      fluid(maxWidth: 960) {
        base64
        srcSet
        sizes
        src
        aspectRatio
      }
    }
    content {
      childMarkdownRemark {
        excerpt
      }
    }
  }
`
