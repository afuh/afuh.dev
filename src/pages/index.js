import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { graphql } from "gatsby"

import { FadeInText, List } from '../utils/UI'
import { media } from '../utils/styles'
import { useSiteMeta } from '../utils/hooks'

import Layout from '../components/layout'
import GHBox from '../components/githubBox'

const GithubBox = styled(GHBox)`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 320px;
  margin-top: 40px;

  ${media.custom(800, css`
    position: inherit;
    max-width: 100%;
  `)}
`

const IndexPage = ({ data: { contentfulProjects: { projects } } }) => {
  const { title, description } = useSiteMeta()

  return (
    <Layout
      heading={(
        <>
          <h1>
            <FadeInText
              text={title}
              duration={5}
            />
          </h1>
          <h2>{description}</h2>
        </>
      )}
    >
      <>
        <List data={projects} />
        <GithubBox className='github-box'/>
      </>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      meta: PropTypes.object.isRequired
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulProjects {
      projects {
        id
        slug
        title
      }
    }
  }
`
