import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

import { useProjectData } from '../../utils/hooks'

const Wrapper = styled.div`
  padding: 20px 0;

  .tag-box {
    display: inline;
    padding: 5px 10px;
    margin-right: 10px;
    background: ${({ theme }) => theme.softGray};
    font-weight: 700;
    font-size: 1.2rem;

    &:hover,
    &:active,
    &:focus {
      background: ${({ theme }) => theme.gray}5e;
    }
  }
`

const Footer = () => {
  const { tags } = useProjectData()

  return (
    <Wrapper>
      {tags.map(tag => (
        <div
          key={tag}
          className='tag-box'
        >
          <Link to={`/tag/${tag}`}>{tag}</Link>
        </div>
      ))}
    </Wrapper>
  )
}

export default Footer
