import React from 'react'
import PropTypes from 'prop-types'

import { List } from '../utils/UI'

const Home = ({ data }) => (
  <List data={data} />
)

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
