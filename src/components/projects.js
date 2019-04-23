import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled, { css, keyframes } from "styled-components"

import { hover } from '../utils/styles'

const session = {
  get: () => sessionStorage.getItem('project'),
  set: id => sessionStorage.setItem('project', id)
}

const fadeIn = keyframes`
	0% {
		opacity: 0;
    ${'' /* filter: grayscale(1); */}
	}
	100% {
		opacity: 1;
    ${'' /* filter: grayscale(0); */}
	}
`

const Inner = styled.div`
	position: relative;
	align-self: stretch;

  flex: 1;

  display: flex;
  flex-direction: column;

  ${({ right }) => right && css`
		overflow: auto;
    align-items: flex-end;

		&::before {
			content: '';
			position: absolute;
			left: 13%;
			height: 100%;
			width: 1px;
			background: ${({ theme }) => theme.black}1f;
		}
  `}
`

const Wrapper = styled.div`
	padding: 20px;
  margin: 0 auto;
  max-width: 1000px;

  max-height: 310px;
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

	img {
		animation: ${fadeIn} .5s linear;
	}
`

const Text = styled.button`
  border: none;
  cursor: pointer;
  letter-spacing: 0.12rem;

	&:focus {
		outline: 0;
	}

  h2 {
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
    project: null
  }

  componentDidMount(){
    this.handleSelectedProject()
  }

  handleSelectedProject = id => {
    const { projects } = this.props
    const se = session.get()

    if (!id && se) {
      const [ project ] = projects.filter(project => project.id === se)
      return this.setState({ project })
    }

    if (!id) {
      return this.setState({ project: projects[0] })
    }

    const [ project ] = projects.filter(project => project.id === id)

    this.setState({ project })
    session.set(id)
  }

  render(){
    const { projects } = this.props
    const { project } = this.state
    return (
      <Wrapper>
        <Inner>
          {project &&
            <GatsbyLink to={project.slug} key={project.slug}>
              <Figure>
                <Card>
                  <Img
                    style={{ zIndex: -1, height: 160 }}
                    fluid={project.image.fluid}
                  />
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
                onClick={() => this.handleSelectedProject(pr.id)}
              >
                <h2>{pr.title}</h2>
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
