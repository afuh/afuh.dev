import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"

import Layout from 'components/layout'

const Projects = ({ location, data }) => (
  <Layout location={location}>
    <ul>
      {data.allContentfulProject.edges.map(edge => (
        <li key={edge.node.slug}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <p>{edge.node.content.childMarkdownRemark.excerpt}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

Projects.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Projects

export const pageQuery = graphql`
  {
    allContentfulProject {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
