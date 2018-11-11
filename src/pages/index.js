import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from "styled-components"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SocialIcons from '../components/socialIcons'

import FadeIn from '../components/textFadeIn'

import { flex } from '../utils/styles'

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Content = styled.section`
  height: 100vh;
  padding: 0 20px;

  ${flex({ dir: 'column' })}
  text-align: center;
`

const Presentation = styled.div`
  width: 100%;
  position: relative;
`

const Title = styled.h1`
  animation: ${fadeIn} 1s;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`

const SubTitle = styled.h2`
  animation: ${fadeIn} 1.5s;
  font-weight: 200;
  font-size: 18px;
  margin: 0;
`

const HiddenTitle = styled(Title)`
  position: absolute;
  width: 100%;
  top: 0;
  color: transparent;

  &::selection {
    background: #000;
    color: #fff;
  }
`

const fontWeight = 500

const IndexPage = ({ location, data: { site: { meta } } }) => (
  <Layout location={location}>
    <Content>
      <Presentation>
        <Title>
          <FadeIn text={meta.title} />
        </Title>
        <HiddenTitle>{meta.title.split(" ").reverse().join(" ")}</HiddenTitle>

        <SubTitle>
          <span style={{ fontWeight }}>{meta.description}</span>,
                currently working at {` `}
          <span style={{ fontWeight }}>
            <a href={meta.working.url}>{meta.working.name}</a>
          </span>.
        </SubTitle>
      </Presentation>
      <SocialIcons />
    </Content>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      meta: PropTypes.object.isRequired
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
	{
		site {
			meta: siteMetadata {
				title
				description
				working {
					name
					url
				}
			}
		}
	}
`
