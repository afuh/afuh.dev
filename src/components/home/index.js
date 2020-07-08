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

const Home = ({ data }) => (
  <Wrapper>
    {data.map(({ category, projects }) => (
      <ProjectList
        key={category}
        title={category}
        data={projects}
      />
    ))}
  </Wrapper>
)

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
