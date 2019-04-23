import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Projects from '../components/projects'

const TagPage = ({ data: { allContentfulProject } }) => {
  const projects = allContentfulProject.edges.map(({ node }) => node)

  return (
    <Layout>
      <Projects projects={projects}/>
    </Layout>
  )
}

TagPage.propTypes = {
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default TagPage

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(
      filter: { tags: { in: $tag } }
      sort: { fields: featured, order: DESC }
    ) {
      edges {
        node {
          ...projectInfo
        }
      }
    }
  }
`
