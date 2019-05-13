import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"

import { media } from '../../utils/styles'
import { useProjectData } from '../../utils/hooks'

const Wrapper = styled.div`
  margin-left: 1rem;

  a {
    padding: 0 6px;
    color: ${({ theme }) => theme.white};
    font-size: 1.7rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;

    ${media.custom(880, css`
      color: ${({ theme }) => theme.black};
    `)}

    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.black};
      background: ${({ theme }) => theme.accent};
      }
    }

  ${media.phone(css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 60px;

    a {
      margin-bottom: 0;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `)}
`

const External = styled.a.attrs({
  rel: "nofollow noopener noreferrer",
  target: "_blank"
})``

const ExternalLinks = ({ id }) => {
  const { url, code } = useProjectData()

  return (
    <Wrapper id={id}>
      <External href={url}>Live</External>
      {code && <External href={code}>Code</External>}
    </Wrapper>
  )
}

ExternalLinks.propTypes = {
  id: PropTypes.string
}

export default ExternalLinks
