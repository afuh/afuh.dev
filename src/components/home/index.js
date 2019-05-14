import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../utils/styles'
import ProjectList from './projectList'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.headerHeight.desktop}px);
    ${theme.globalMargin(80)}
  `};

  ${media.phone(css`
    width: 100%;
  `)}
`

const Home = ({ data }) => {
  const type = data.reduce((acc, project) => {
    const key = project.isWork ? 'work' : 'personal'
    acc[key].push(project)
    return acc
  }, {
    work: [],
    personal: []
  })

  return (
    <Wrapper>
      {Object.keys(type).map(key => (
        <ProjectList
          key={key}
          title={key}
          data={type[key]}
        />
      ))}
    </Wrapper>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
