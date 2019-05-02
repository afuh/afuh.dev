import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import GHBox from '../components/githubBox'
import { List } from '../utils/UI'
import { media } from '../utils/styles'

const GithubBox = styled(GHBox)`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 320px;
  margin-top: 40px;

  ${media.custom(800, css`
    position: inherit;
    max-width: 100%;
  `)}
`

const Home = ({ data }) => (
  <div>
    <List data={data} />
    <GithubBox className='github-box'/>
  </div>
)

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home
