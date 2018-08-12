import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import Layout from 'components/layout'
import TempMessage from 'components/message'

import { flex, media } from 'utils/styles'

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  position: relative;
  background: rgba(0, 0, 0, 0.5);

	${media.xs(css`
		width: 100vw;
	  height: 100vh;
	`)}
`

const Border = styled.div`
  position: absolute;
  height: 180px;
  width: 14%;

  ${({ bottom, color }) => (
    bottom
      ? css`
        bottom: 0;
        right: 0;
        border-bottom: 1px solid ${color};
        border-right: 1px solid ${color};
      `
      : css`
        top: 0;
        border-top: 1px solid ${color};
        border-left: 1px solid ${color};

      `
  )}
`

const Content = styled.section`
  height: 100%;
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

const HiddenTitle = Title.extend`
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

const Divider = styled.hr`
	animation: ${fadeIn} 0.3s;
	background: #454545;
	height: 1px;
	width: 25%;
	transform: translateY(30px);
`

const IndexPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={({ site: { meta } }) => (
      <Layout location={location}>
        <Wrapper>
          <Border color={'#fafafa'}/>
          <Border bottom color={'#fafafa'}/>
          <Content>
            <Presentation>
              <Title>{meta.title}</Title>
              <HiddenTitle>{meta.title.split(" ").reverse().join(" ")}</HiddenTitle>
              <SubTitle>
                <span style={{ fontWeight }}>{meta.description}</span>,
                currently working at {` `}
                <span style={{ fontWeight }}>
                  <a href={meta.working.url}>{meta.working.name}</a>
                </span>.
              </SubTitle>
            </Presentation>
            <Divider />
            <TempMessage />
          </Content>
        </Wrapper>
      </Layout>
    )}
  />
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
