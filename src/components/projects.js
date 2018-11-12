import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled, { css, keyframes } from "styled-components"

import { flex, hover } from '../utils/styles'

const fadeIn = keyframes`
	0% {
    filter: grayscale(1);
	}
	100% {
    filter: grayscale(0);
	}
`

const Inner = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ right }) => right && css`
    align-items: flex-end;
  `}
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;

  ${flex}
  height: 400px;
`

const Card = styled.div`
  overflow: hidden;
  margin-bottom: 2.0rem;
  box-shadow: ${({ theme }) => theme.innerShadow};
  border-radius: 20px;
`

const GatsbyLink = styled(Link)`
  border-bottom: none;
`

const Figure = styled.figure`
  margin: 0;

  ${({ animate }) => animate && css`
    animation: ${fadeIn} linear 0.5s alternate;
  `}
`

const Text = styled.button`
  border: none;
  cursor: pointer;
  letter-spacing: 0.12rem;

  h3 {
    margin: 0 0 2px;

    ${({ theme, select }) => css`
      color: ${select ? theme.black : "#9F9FA3"};
    `}

    ${hover(css`
      color: ${({ theme }) => theme.black};
    `)}
  }
`

const Caption = styled.figcaption`
  color: #828282;
  font-weight: 300;
  line-height: 1.43;
`

class Projects extends Component {
  state = {
    project: null,
    animate: false
  }

  componentDidMount(){
    this.handleProjectImage()
  }

  componentDidUpdate(prevProps, prevState){
    const { project } = this.state

    if (prevState.project && prevState.project.id !== project.id) {
      this.setState({ animate: true })
    }
  }

  handleProjectImage = id => {
    const { projects } = this.props

    if (!id) {
      return this.setState({ project: projects[0] })

    }
    const [ project ] = projects.filter(project => project.id === id)

    this.setState({ project, animate: false })
  }

  render(){
    const { projects } = this.props
    const { project, animate } = this.state

    return (
      <Wrapper>
        <Inner>
          {project &&
            <GatsbyLink to={project.slug} key={project.slug}>
              <Figure animate={animate}>
                <Card>
                  <Img fluid={project.image.fluid} style={{ height: 170, zIndex: -1 }}/>
                </Card>
                <Caption>{project.content.childMarkdownRemark.excerpt}</Caption>
              </Figure>
            </GatsbyLink>
          }
        </Inner>
        <Inner right>
          {projects.map(pr => (
            <div key={pr.id}>
              <Text
                select={project && project.id === pr.id}
                onClick={() => this.handleProjectImage(pr.id)}
              >
                <h3>{pr.title}</h3>
              </Text>
            </div>
          ))}
        </Inner>
      </Wrapper>
    )
  }
}


Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects
