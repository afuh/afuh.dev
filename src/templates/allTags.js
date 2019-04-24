import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import Layout from '../components/layout'

const AllTags = ({ pageContext }) => (
  <Layout heading='tags'>
    <ul>
      {pageContext.allTags.map(tag => (
        <li key={tag}>
          <Link to={`/tag/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

AllTags.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default AllTags
