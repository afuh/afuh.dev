import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 20px;

  p, li {
    margin-top: 0;
    font-size: 1.7rem;
    line-height: 1.6;
    font-family: "Open Sans", sans-serif;
  }

  a {
    ${({ theme }) => theme.anchorHover}
  }

  ul {
    padding-left: 20px;

    li {
      display: list-item;
      text-align: match-parent;
    }
  }
`

export const MarkdownWrapper = ({ html, children, ...rest }) => {
  if (children) {
    return (
      <Wrapper
        {...rest}
      >
        {children}
      </Wrapper>
    )
  }

  return (
    <Wrapper
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  )
}

MarkdownWrapper.propTypes = {
  html: PropTypes.string
}
