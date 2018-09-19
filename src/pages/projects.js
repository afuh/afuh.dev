import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { flex } from 'utils/styles'

import Layout from 'components/layout'

const Box = styled.li`
  ${flex({ x: 'flex-start' })}
`

const Projects = ({ location, data }) => (
  <Layout location={location}>
    <ul>
      {data.allContentfulProject.edges.map(edge => (
        <Box key={edge.node.slug} >
          <div style={{ marginRight: 20 }}>
            <Link to={edge.node.slug}>
              <img src={edge.node.image.fixed.src}/>
            </Link>

          </div>
          <div>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
            <p>{edge.node.content.childMarkdownRemark.excerpt}</p>
          </div>
        </Box>
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
          image {
            fixed(width: 120) {
              src
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
