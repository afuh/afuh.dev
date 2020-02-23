import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { useSiteMeta } from '../../utils/hooks'
import { Inner } from '../../components/shared'

const Wrapper = styled.header(({ theme }) => css`
  display: flex;
  justify-content: center;
  height: ${theme.headerHeight.desktop}px;
  background: ${theme.primary};

  ${theme.media.phone(css`
    height: ${theme.headerHeight.mobile}px;
  `)}

  .heading {
    flex: 1;

    h1, h2 {
      color: ${theme.secondary};
      font-weight: 900;
      font-size: 6.0rem;
      margin: 0;

      ${theme.media.phone(css`
        text-align: center;
        font-size: 3.4rem;
      `)}
    }

    h2 {
      font-weight: 700;
      font-size: 2.0rem;
    }
  }

  .nav {
    text-align: right;

    li {
      list-style: none;
      font-size: 1.8rem;
      text-transform: lowercase;
      margin: 1.2rem 0;
    }

    ${theme.media.phone(css`
      display: none;
    `)}
  }
`)

export const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.gray};

  &:hover,
  &:active,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.secondary};
  }
`

const Heading = ({ data }) => (
  <div className='heading'>
    {typeof data === 'string' ?
      <Link to='/'><h1>{data}</h1></Link> :
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
            partiallyActive={item.path.length > 1}
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
