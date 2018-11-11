import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

const Card = styled.section`
  position: relative;
  overflow: hidden;
  margin: 10px;
  box-shadow: ${({ theme }) => theme.innerShadow};
  border-radius: 20px;
`

const GatsbyLink = styled(Link)`
  border-bottom: none;
`

const Info = styled.div`
  padding: 0 20px;
`

const Projects = ({ projects }) => (
  <Wrapper>
    {projects.map(project => (
      <GatsbyLink to={project.slug} key={project.slug}>
        <Card >
          <Info>
            <h2>{project.title}</h2>
            <p>{project.content.childMarkdownRemark.excerpt}</p>
          </Info>
          <Img style={{ zIndex: -1 }} fluid={project.image.fluid}/>
        </Card>
      </GatsbyLink>
    ))}
  </Wrapper>
)

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects
