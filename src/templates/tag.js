import { graphql } from "gatsby"

import projects from '../components/projects'

export default ({ data }) => projects({ data })

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(
      filter: { tags: { in: $tag } }
      sort: { fields: featured, order: DESC }
    ) {
      edges {
        node {
          ...projectInfo
        }
      }
    }
  }
`
