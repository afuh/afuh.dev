import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'
import { Link } from "gatsby"

import { Inner, MarkdownWrapper } from '../utils/UI'

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;

  .externals-wrapper {
    margin-left: 1rem;

    a {
      text-transform: lowercase;
      font-size: 1.7rem;
      font-weight: 700;
      display: block;
      margin-bottom: 1rem;
    }
  }
`

const Content = styled.article`
  max-width: 630px;

  .image-wrapper {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: inset -2px 4px 10px rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
    }
  }

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

const Image = ({ image, title }) => (
  <Img
    className='image-wrapper'
    fluid={image.fluid}
    alt={title}
  />
)

Image.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

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

const Externals = ({ url, code }) => (
  <div className='externals-wrapper'>
    <a href={url}>Live</a>
    <a href={code}>Code</a>
  </div>
)

Externals.propTypes = {
  url: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}

const Project = ({ data }) => (
  <Inner>
    <Wrapper>
      <Content>
        <Image {...data} />
        <Text {...data} />
        <Tags {...data} />
      </Content>
      <Externals {...data} />
    </Wrapper>
  </Inner>
)

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project
