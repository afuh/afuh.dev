import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { ExternalLink } from '../shared'
import { useProjectData } from '../../utils/hooks'

const Wrapper = styled.div(({ theme }) => css`
  margin-left: 1rem;

  a {
    padding: 0 6px;
    color: ${theme.secondary};
    font-size: 1.7rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;

    ${theme.media.custom(880, css`
      color: ${theme.primary};
    `)}

    &:hover,
    &:active,
    &:focus {
      color: ${theme.accent};
    }
  }

  ${theme.media.phone(css`
    margin-left: 0;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.softGray};

    a {
      margin-right: 1rem;
      padding: 0;
    }
  `)}
`)

const ExternalLinks = ({ id }) => {
  const { url, code } = useProjectData()

  return (
    <Wrapper id={id}>
      <ExternalLink href={url}>live</ExternalLink>
      {code && <ExternalLink href={code}>code</ExternalLink>}
    </Wrapper>
  )
}

ExternalLinks.propTypes = {
  id: PropTypes.string
}

export default ExternalLinks
