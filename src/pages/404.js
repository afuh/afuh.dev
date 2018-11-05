import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <h1>404</h1>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage
