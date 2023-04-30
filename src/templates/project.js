/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Project from '../components/project'
import { ProjectContext } from '../utils/hooks/useProjectData'
import { SEO } from '../components/shared'

const ProjectPage = ({ data: { project } }) => (
  <Layout heading={project.title}>
    <ProjectContext.Provider value={project}>
      <Project />
    </ProjectContext.Provider>
  </Layout>
)

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage

export const Head = ({ data: { project } }) => {
  const seoInfo = {
    title: project.title,
    description: project.content.md.excerpt,
    pathname: '/' + project.slug,
    image: {
      url: project.image.file.url,
      contentType: project.image.file.contentType,
      size: project.image.file.details.image,
    },
  }

  return <SEO {...seoInfo} />
}

export const pageQuery = graphql`
  query PROJECT_PAGE_QUERY($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      ...projectInfo
      url
      code
      image: seoImage {
        gatsbyImageData(placeholder: BLURRED)
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
