import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'
import { Link } from "gatsby"

import { Inner } from '../utils/UI'

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;

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
  }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset -2px 4px 10px rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
  }

  .text-wrapper {
    a {
      text-decoration: underline;
    }
  }
`

const Image = ({ image, title }) => (
  <div className='image-wrapper'>
    <Img
      fluid={image.fluid}
      alt={title}
    />
    <div className='shadow' />
  </div>
)

Image.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

const Tags = ({ tags }) => (
  tags.map(tag => (
    <code key={tag} style={{ marginRight: 20 }}>
      <Link to={`/tag/${tag}`}>{tag}</Link>
    </code>
  ))
)

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

const Text = ({ content }) => (
  <div
    className='text-wrapper'
    dangerouslySetInnerHTML={{ __html: content.md.html }}
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
