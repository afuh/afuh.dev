import React, { Fragment } from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

const Project = ({ data }) => (
  <div>
    {data.allContentfulProject.edges.map(edge =>
      <Fragment key={edge.node.slug}>
        <p>{edge.node.title}</p>
        <div dangerouslySetInnerHTML={{ __html: edge.node.content.childMarkdownRemark.html }} />
      </Fragment>
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
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
