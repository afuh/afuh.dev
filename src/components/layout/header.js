import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { useSiteMeta } from '../../utils/hooks'
import { media } from '../../utils/styles'

const Wrapper = styled.header`
  min-height: 220px;
  background: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rem 0 24rem;

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

      .active {
        color: ${({ theme }) => theme.white};
      }
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
  &:focus {
    color: ${({ theme }) => theme.white};
  }
`

const Header = ({ heading }) => {
  const { nav } = useSiteMeta()

  return (
    <Wrapper>
      <div className='heading'>
        {typeof heading === 'string' ?
          <h1>{heading}</h1> :
          heading
        }
      </div>
      <nav className='nav'>
        <ul>
          {nav.map(item => (
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
