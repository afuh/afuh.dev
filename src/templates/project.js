import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

const Project = ({ data }) => (
  <div>
    {data.allContentfulProject.edges.map(({ edge: { node } }) =>
      <p key={node.slug}>{node.title}</p>
    )}
  </div>
)

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    allContentfulProject(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
