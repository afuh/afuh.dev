import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { useSiteMeta } from '../../utils/hooks'
import { media } from '../../utils/styles'
import { Inner } from '../../utils/UI'

const Wrapper = styled.header`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme && css`
    height: ${theme.headerHeight.desktop}px;
    background: ${theme.black};
  `};


  .heading {
    flex: 1;

    h1, h2 {
      color: ${({ theme }) => theme.white};
      font-weight: 900;
      font-size: 5.0rem;
      margin: 0;
    }

    h2 {
      font-weight: 700;
      font-size: 2.0rem;
    }
  }

  .nav {
    text-align: right;

    li {
      font-size: 1.6rem;
      text-transform: lowercase;
      margin: 1.2rem 0;
    }

    ${media.phone(css`
      display: none;
    `)}
  }
`

const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.gray};

  &:hover,
  &:active,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.white};
  }
`

const Heading = ({ data }) => (
  <div className='heading'>
    {typeof data === 'string' ?
      <h1>{data}</h1> :
      data
    }
  </div>
)

Heading.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

const Nav = ({ data }) => (
  <nav className='nav'>
    <ul>
      {data.map(item => (
        <li key={item.name}>
          <Link
            activeClassName='active'
            to={item.path}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

Nav.propTypes = {
  data: PropTypes.array.isRequired
}

const Header = ({ heading }) => {
  const { nav } = useSiteMeta()

  return (
    <Wrapper>
      <Inner>
        <Heading data={heading} />
        <Nav data={nav} />
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

Header.defaultProps = {
  heading: 'Axel Fuhrmann'
}

export default Header
