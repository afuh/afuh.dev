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

  ${media.phone(css`
    display: none;
  `)}
`

const Home = ({ data }) => (
  <>
    <List data={data} />
    <GithubBox />
  </>
)

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
