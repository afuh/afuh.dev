import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { Inner as ListInner } from './'

const Inner = styled(ListInner)`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 120px;

    li {
      margin: 2rem 0;
    }
  }
`

const Link = styled(GatsbyLink)`
  font-size: 2.4rem;
  font-weight: 900;

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.gray};
  }
`

export const List = ({ data }) => (
  <Inner>
    <ul>
      {data.map(project => (
        <li key={project.id}>
          <Link
            to={"/" + project.slug}
          >
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  </Inner>
)

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List
