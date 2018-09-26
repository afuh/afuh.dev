import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

import { flex } from 'utils/styles'

const Box = styled.li`
  ${flex({ x: 'flex-start' })}
`

const Projects = ({ data: { allContentfulProject: projects } }) => (
  <ul>
    {projects.edges.map(({ node: project }) => (
      <Box key={project.slug} >
        <div style={{ marginRight: 20 }}>
          <Link to={project.slug}>
            <Img fixed={project.image.fixed}/>
          </Link>
        </div>
        <div>
          <Link to={project.slug}>{project.title}</Link>
          <p>{project.content.childMarkdownRemark.excerpt}</p>
        </div>
      </Box>
    ))}
  </ul>
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
          image {
            fixed(width: 200) {
              height
              width
              src
              srcSet
            }
          }
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
        }
      }
    }
  }
`
