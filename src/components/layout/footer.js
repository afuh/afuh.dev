import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Link } from './header'
import { useSiteMeta } from '../../utils/hooks'

const Wrapper = styled.footer(({ theme }) => css`
  display: none;
  height: ${theme.headerHeight.mobile}px;
  background: ${theme.primary};

  ${theme.media.phone(css`
    display: flex;
    justify-content: center;
  `)}

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      font-size: 1.8rem;
      text-transform: lowercase;
      align-self: stretch;
      flex: 1;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }
`)

const Nav = ({ data }) => (
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
)

Nav.propTypes = {
  data: PropTypes.array.isRequired
}

const Footer = () => {
  const { nav } = useSiteMeta()

  return (
    <Wrapper>
      <Nav data={nav} />
    </Wrapper>
  )
}

export default Footer
