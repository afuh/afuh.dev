import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

import { usePagination, useViewedProject } from '../../utils/hooks'
import { Arrow } from '../../utils/UI/icons'
import { media } from '../../utils/styles'

const Wrapper = styled.div`
  display: flex;

  ${media.phone(css`
    justify-content: center;
    align-self: center;
    margin-top: 20px;
  `)}
`

const Link = styled(GatsbyLink)`
  width: 80px;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid ${({ theme }) => theme.softGray};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.7rem;
  }

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.accent};

    svg {
      fill: ${({ theme }) => theme.accent};
    }
  }

  ${media.phone(css`
    width: 100%;
    margin: 0;
    height: 60px;

    svg {
      height: 2rem;
    }
  `)}
`

const Button = ({ children, slug }) => {
  const { addViewedProject } = useViewedProject()

  return (
    <Link
      to={'/' + slug}
      onClick={() => addViewedProject(slug)}
    >
      {children}
    </Link>
  )
}

Button.propTypes = {
  slug: PropTypes.string.isRequired
}

const Pagination = () => {
  const { next, prev } = usePagination()

  return (
    <Wrapper>
      <Button slug={prev}>
        <Arrow.left/>
      </Button>
      <Button slug={next}>
        <Arrow.right/>
      </Button>
    </Wrapper>
  )
}

export default Pagination
