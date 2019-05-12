import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../utils/styles'
import ProjectList from './projectList'

const Wrapper = styled.section`
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight.desktop}px);
  margin: 80px 0 20px;
  display: flex;
  flex-direction: column;

  ${media.phone(css`
    width: 100%;
    margin: 60px 0 0;
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
