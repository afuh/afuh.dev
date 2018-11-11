import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from "styled-components"

import { flex } from '../utils/styles'

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  max-width: 500px;

  ${flex({ dir: 'column' })}
`

const Inner = styled.div`
  animation: ${fadeIn} 2s;
  margin: 10px 0;
`

const Icon = styled.a`
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 22px;
  opacity: 0.6;
`
const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const SocialIcons = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          meta: siteMetadata {
            social {
              icon
              url
            }
          }
        }
      }
    `}
    render={({ site: { meta } }) => (
      <Wrapper>
        <Inner>
          {meta.social.map(page => (
            <Icon key={page.icon} href={page.url}>{findIcon(page.icon)}</Icon>
          ))}
        </Inner>
      </Wrapper>
    )}
  />
)

export default SocialIcons
