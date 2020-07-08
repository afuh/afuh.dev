import React from 'react'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'


import { useProjectData } from '../../utils/hooks'
import { Button } from '../shared'
import Pagination from './pagination'

const Wrapper = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tags {
    margin-right: 10px;

    ${({ theme }) => theme.media.phone(css`
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
