import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link } from "gatsby"

import Image from './image'
import { MarkdownWrapper } from '../../utils/UI'
import { useProjectData } from '../../utils/hooks'

const Wrapper = styled.div`
  .text-wrapper {
    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.gray}1a;
      margin: 20px auto 0;
    }
  }

  .tags-wrapper {
    padding: 20px 0;

    .tag-box {
      display: inline;
      padding: 5px 10px;
      margin-right: 10px;
      background: ${({ theme }) => theme.gray}1a;
      font-weight: 700;
      font-size: 1.2rem;

      &:hover,
      &:active,
      &:focus {
        background: ${({ theme }) => theme.gray}5e;
      }
    }
  }
`

const Tags = ({ tags }) => (
  <div className='tags-wrapper'>
    {tags.map(tag => (
      <div
        key={tag}
        className='tag-box'
      >
        <Link to={`/tag/${tag}`}>{tag}</Link>
      </div>
    ))}
  </div>
)

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

const Text = ({ html }) => (
  <MarkdownWrapper
    className='text-wrapper'
    html={html}
  />
)

Text.propTypes = {
  html: PropTypes.string.isRequired
}

const Content = ({ id }) => {
  const { content, image, tags } = useProjectData()

  return (
    <Wrapper id={id}>
      <Image
        image={image}
        id='desktop'
      />
      <Text html={content.md.html} />
      <Tags tags={tags} />
    </Wrapper>
  )
}

Content.propTypes = {
  id: PropTypes.string
}

export default Content
