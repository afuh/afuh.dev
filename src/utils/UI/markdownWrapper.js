import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.globalWidth}px;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;

  h2 {
    margin-top: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.softGray};
  }

  p, li {
    margin-top: 0;
    font-size: 1.6rem;
    line-height: 1.5;
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

  hr {
    display: block;
    height: 2px;
    width: 120px;
    background-color: ${({ theme }) => theme.softGray};
    margin: 30px auto;
    border-width: 0;
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
