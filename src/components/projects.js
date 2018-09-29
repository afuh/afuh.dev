import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from "styled-components"

import { flex, hover } from 'utils/styles'

const Card = styled.div`
  width: auto;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  .test {
    ${flex({ x: 'flex-end' })}
    flex-direction: column;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;

    ${hover(css`
      background: rgba(0, 0, 0, 0.8);
    `)}

    p {
      font-size: 12px;
      margin: 0;
    }

    h2 {
      font-size: 16px;
    }

    transition: all 0.1s ease;
  }
`

const Wrapper = styled.article`
  padding: 20px;
  ${flex({ x: 'space-between' })}
  display: flex;
  flex-wrap: wrap;
`

const GatsbyLink = styled(Link)`
  border-bottom: none;
`

const Projects = ({ data: { allContentfulProject: projects } }) => (
  <Wrapper>
    {projects.edges.map(({ node: project }) => (
      <Card key={project.slug}>
        <GatsbyLink to={project.slug}>
          <div className='test'>
            <h2>{project.title}</h2>
            <p>{project.content.childMarkdownRemark.excerpt}</p>
          </div>
        </GatsbyLink>
        <Img fixed={project.image.fixed}/>
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
    }
    content {
      childMarkdownRemark {
        excerpt(pruneLength: 100)
      }
    }
  }
`
