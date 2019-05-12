import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import { List } from '../utils/UI'

const TagPage = ({ pageContext, data: { allContentfulProject } }) => {
  const projects = allContentfulProject.edges.map(({ node }) => node)

  return (
    <Layout
      heading={(
        <>
          <Link
            to='/tag'
          >
            <h1>tags</h1>
          </Link>
          <h2>{pageContext.tag}</h2>
        </>
      )}
    >
      <List
        data={projects}
        paddingTop
      />
    </Layout>
  )
}

TagPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default TagPage

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`
