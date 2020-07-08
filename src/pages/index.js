import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { FadeInText, ExternalLink as _ExternalLink } from '../components/shared'
import { useSiteMeta, useToggleTheme, useSiteContent } from '../utils/hooks'

import Layout from '../components/layout'
import Home from '../components/home'

const ExternalLink = styled(_ExternalLink)`
  color: ${({ theme }) => theme.secondary}
`

const Heading = () => {
  const { title } = useSiteMeta()
  const { toggleTheme } = useToggleTheme()
  const { jobPosition: { title: jobTitle, company, url } } = useSiteContent()

  return (
    <>
      <FadeInText
        as='h1'
        duration={0.6}
        initialOpacity={0.01}
        onClick={toggleTheme}
      >
        {title}
      </FadeInText>
      <h2>{jobTitle} at <ExternalLink href={url} >{company}</ExternalLink></h2>
    </>
  )
}

const IndexPage = ({ data: { contentfulCuratedProjects } }) => (
  <Layout heading={ <Heading />}>
    <Home data={contentfulCuratedProjects.byCategory}/>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulCuratedProjects: PropTypes.object.isRequired
  })
}

export default IndexPage

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulCuratedProjects {
  	  byCategory: projectsByCategory {
        category
        projects {
          ...projectInfo
        }
      }
    }
  }
`
