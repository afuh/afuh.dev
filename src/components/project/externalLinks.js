import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"

import { media } from '../../utils/styles'

const Wrapper = styled.div`
  margin-left: 1rem;

  a {
    text-transform: lowercase;
    font-size: 1.7rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
  }

  ${media.phone(css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 60px;

    a {
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      border: 1px solid ${({ theme }) => theme.white};
      background: #F2F2F2;

      &:hover,
      &:active,
      &:focus {
        background: ${({ theme }) => theme.gray}80;
      }
    }
  `)}
`

const ExternalLinks = ({ url, code, id }) => (
  <Wrapper id={id}>
    <a href={url}>Live</a>
    <a href={code}>Code</a>
  </Wrapper>
)

ExternalLinks.propTypes = {
  url: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default ExternalLinks
