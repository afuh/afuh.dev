import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { List as _List, Inner } from '../../components/shared'

const List = styled(_List)(({ theme }) => css`
  margin-bottom: 60px;

  ul {
    position: relative;
    border-left: 1px solid ${theme.softGray};

    ${theme.media.phone(css`
      border-left: none;
      width: 100%;
    `)}

    &::before  {
      content: "${p => p.title}";
      display: inline-block;
      position: absolute;
      top: 0;
      left: -2px;
      text-transform: uppercase;
      font-size: 1.2rem;
      color: ${theme.gray};
      transform: rotate(90deg);
	    transform-origin: top left;

      ${theme.media.phone(css`
        transform: none;
        position: inherit;
        display: block;
        border-bottom: 1px solid ${theme.softGray};
        margin-bottom: 10px;
      `)}
    }

    li {
      padding-left: 1.6rem;

      ${theme.media.phone(css`
        padding-left: 0;
      `)}

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`)

const ProjectList = ({ data, title }) => (
  <Inner>
    <List
      title={title}
      data={data}
    />
  </Inner>
)

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default ProjectList
