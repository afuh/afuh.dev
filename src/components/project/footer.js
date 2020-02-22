import React from 'react'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'

import Pagination from './pagination'

import { useProjectData } from '../../utils/hooks'
import { media } from '../../utils/styles'
import { Button } from '../../utils/UI/'

const Wrapper = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tags {
    margin-right: 10px;

    ${media.phone(css`
      margin-top: 4px;
      margin-right: 4px;
    `)}
  }
`

const Tags = () => {
  const { tags } = useProjectData()

  return (
    <div>
      {tags.map(tag => (
        <Button
          className='tags'
          key={tag}
          onClick={() => navigate(`/tag/${tag}`)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}

const Footer = () => (
  <Wrapper>
    <Tags />
    <Pagination />
  </Wrapper>
)

export default Footer
