import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link } from "gatsby"

import Image from './image'
import { MarkdownWrapper } from '../../utils/UI'

const Wrapper = styled.div`
  max-width: 630px;

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

const Text = ({ content }) => (
  <MarkdownWrapper
    className='text-wrapper'
    html={content.md.html}
  />
)

Text.propTypes = {
  content: PropTypes.object.isRequired
}

const Content = data => (
  <Wrapper id={data.id}>
    <Image {...data} id='desktop'/>
    <Text {...data} />
    <Tags {...data} />
  </Wrapper>
)

Content.propTypes = {
  data: PropTypes.object
}

export default Content
