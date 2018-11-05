import { graphql } from "gatsby"

import projects from '../components/projects'

export default ({ data }) => projects({ data })

export const pageQuery = graphql`
  {
    allContentfulProject(sort: { fields: featured, order: DESC }) {
      edges {
        node {
          ...projectInfo
        }
      }
    }
  }
`
