import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MarkdownWrapper } from '../shared'
import { useProjectData } from '../../utils/hooks'
import Pagination from './pagination'
import Image from './image'

const Wrapper = styled.div`
  .text-wrapper {
    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.softGray};
      margin: 40px auto 0;
    }
  }
`

const Content = ({ id }) => {
  const { content } = useProjectData()

  return (
    <Wrapper id={id}>
      <Image id="desktop" />
      <MarkdownWrapper className="text-wrapper" html={content.md.html} />
      <Pagination />
    </Wrapper>
  )
}

Content.propTypes = {
  id: PropTypes.string,
}

export default Content
