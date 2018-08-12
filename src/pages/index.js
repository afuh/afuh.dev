import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>Axel Fuhrmann asdasdas</h1>
    <p>Bla bla bla </p>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
