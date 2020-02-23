import React, { createContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Project from '../components/project'

export const Context = createContext()

const ProjectPage = ({ data: { project } }) => (
  <Layout
    heading={project.title}
    seo={{
      title: project.title,
      description: project.content.md.excerpt,
      pathname: '/' + project.slug,
      image: {
        url: project.image.file.url,
        contentType: project.image.file.contentType,
        size: project.image.file.details.image
      }
    }}
  >
    <Context.Provider value={project}>
      <Project />
    </Context.Provider>
  </Layout>
)

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectPage

export const pageQuery = graphql`
  query PROJECT_PAGE_QUERY ($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      ...projectInfo
      url
      code
      tags
      image {
        fluid(maxWidth: 720) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`
