import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { useSiteMeta, useToggleTheme, useSiteContent } from '../utils/hooks'
import Layout from '../components/layout'
import { List as _List, Inner, MarkdownWrapper, SEO } from '../components/shared'

const List = styled(_List)`
  margin-bottom: 60px;

  ul {
    position: relative;

    li {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const Wrapper = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.globalMargin(80)}
    ${theme.media.phone(css`
      width: 100%;
    `)}
  `,
)

const Heading = () => {
  const { title, description } = useSiteMeta()
  const { toggleTheme } = useToggleTheme()

  return (
    <>
      <h1 onClick={toggleTheme} aria-hidden="true" style={{ cursor: 'pointer' }}>
        {title}
      </h1>
      <h2>{description}</h2>
    </>
  )
}

const IndexPage = ({ data }) => {
  const { personalIntro } = useSiteContent()

  return (
    <Layout heading={<Heading />}>
      <Wrapper>
        <Inner css={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <MarkdownWrapper
            dangerouslySetInnerHTML={{ __html: personalIntro.md.html }}
            css={{ paddingBottom: 32, marginTop: 0 }}
          />
          <List data={data.contentfulProjectList.projects} />
        </Inner>
      </Wrapper>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulProjectList: PropTypes.object.isRequired,
  }),
}

export default IndexPage

export const Head = () => <SEO />

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulProjectList(category: { eq: "Open Source" }) {
      projects {
        ...projectInfo
      }
    }
  }
`
