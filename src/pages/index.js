import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import { FadeInText } from '../utils/UI'
import { useSiteMeta } from '../utils/hooks'

import Layout from '../components/layout'
import Home from '../components/home'

const IndexPage = ({ data: { contentfulProjects: { projects } } }) => {
  const { title, description } = useSiteMeta()

  return (
    <Layout
      heading={(
        <>
          <FadeInText
            as="h1"
            duration={0.6}
            initialOpacity={0.01}
          >
            {title}
          </FadeInText>
          <h2>{description}</h2>
        </>
      )}
    >
      <Home data={projects}/>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulProjects: PropTypes.shape({
      projects: PropTypes.array.isRequired
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulProjects {
      projects {
        ...projectInfo
        isWork
      }
    }
  }
`
