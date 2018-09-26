import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"

const Tags = ({ pageContext, data }) => (
  <>
    <h1>{pageContext.tag}</h1>
    <ul>
      {data.allContentfulProject.edges.map(({ node: project }) => (
        <li key={project.title}>
          <Link to={project.slug}>{project.title}</Link>
        </li>
      ))}
    </ul>
  </>
)

Tags.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default Tags

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(filter: { tags: { in: $tag } }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
