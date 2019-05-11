import React from 'react'
import PropTypes from 'prop-types'

import { List } from '../utils/UI'

const Home = ({ data }) => {
  const type = data.reduce((acc, project) => {
    const key = project.isWork ? 'work' : 'personal'
    acc[key].push(project)
    return acc
  }, {
    personal: [],
    work: []
  })

  return (
    <>
     <List data={type.work} />
     <List data={type.personal} />
    </>
  )
}


Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
