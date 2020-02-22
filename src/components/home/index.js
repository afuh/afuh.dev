import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ProjectList from './projectList'

const Wrapper = styled.section(({ theme }) => css`
  display: flex;
  flex-direction: column;

  ${theme.globalMargin(80)}
  ${theme.media.phone(css`
    width: 100%;
  `)}
`)

const Home = ({ data }) => {
  const type = data.reduce((acc, project) => {
    const key = project.isWork ? 'work' : 'open source'
    acc[key].push(project)
    return acc
  }, {
    work: [],
    'open source': []
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
