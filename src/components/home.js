import React from 'react'
import PropTypes from 'prop-types'

import GithubBox from '../components/githubBox'
import { List } from '../utils/UI'

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
