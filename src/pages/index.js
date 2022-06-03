import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { ExternalLink as _ExternalLink } from '../components/shared'
import { useSiteMeta, useToggleTheme, useSiteContent } from '../utils/hooks'

import Layout from '../components/layout'
import Home from '../components/home'

const ExternalLink = styled(_ExternalLink)`
  color: ${({ theme }) => theme.secondary};
`

const Heading = () => {
  const { title } = useSiteMeta()
  const { toggleTheme } = useToggleTheme()
  const {
    jobPosition: { title: jobTitle, company, url },
  } = useSiteContent()

  return (
    <>
      <h1 onClick={toggleTheme} aria-hidden="true" style={{ cursor: 'pointer' }}>
        {title}
      </h1>
      <h2>
        {jobTitle} at <ExternalLink href={url}>{company}</ExternalLink>
      </h2>
    </>
  )
}

const IndexPage = ({ data }) => (
  <Layout heading={<Heading />}>
    <Home data={data.contentfulProjectList.projects} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulProjectList: PropTypes.object.isRequired,
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulProjectList(category: { eq: "Open Source" }) {
      projects {
        ...projectInfo
      }
    }
  }
`
