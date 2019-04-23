import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Projects from '../components/projects'
import Layout from '../components/layout'

const ProjectsPage = ({ data: { contentfulProjects } }) => (
  <Layout>
    <Projects projects={contentfulProjects.projects} />
  </Layout>
)

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default ProjectsPage

export const pageQuery = graphql`
  {
    contentfulProjects {
      projects {
        ...projectInfo
      }
    }
  }
`
