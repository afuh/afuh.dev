import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from "styled-components"

import { flex, hover, grid } from '../utils/styles'

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  ${({ featured }) => featured ? grid([1, 2, 2]) : grid([1, 3, 2]) }
`

const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const GatsbyLink = styled(Link)`
  border-bottom: none;
`

const Inner = styled.div`
  ${flex({ x: 'flex-end' })}
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 10px;
  z-index: 1;

  position: absolute;
  top: 0;

  background: rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease;

  p {
    font-size: 12px;
    margin: 0;
    opacity: 0;
  }

  h2 {
    font-size: 16px;
    opacity: 0;
  }

  ${hover(css`
    background: rgba(0, 0, 0, 0.8);
    h2, p {
      opacity: 1;
    }
  `)}

`

const Info = ({ title, excerpt }) => (
  <Inner>
    <h2>{title}</h2>
    <p>{excerpt}</p>
  </Inner>
)

Info.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

const Projects = ({ data: { allContentfulProject: projects } }) => (
  <Wrapper>
    {projects.edges.map(({ node: project }) => (
      <Card
        key={project.slug}
        featured={project.featured}
      >
        <GatsbyLink to={project.slug}>
          <Info
            title={project.title}
            excerpt={project.content.childMarkdownRemark.excerpt}
          />
        </GatsbyLink>
        <Img fluid={project.image.fluid}/>
      </Card>
    ))}
  </Wrapper>
)

Projects.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Projects

export const projectFragment = graphql`
  fragment projectInfo on ContentfulProject {
    title
    slug
    featured
    image {
      fixed(width: 400) {
        height
        width
        src
        srcSet
      }
      fluid(maxWidth: 960) {
        base64
        srcSet
        sizes
        src
        aspectRatio
      }
    }
    content {
      childMarkdownRemark {
        excerpt
      }
    }
  }
`
