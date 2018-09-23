import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const AllTags = ({ pageContext }) => (
  <ul>
    {pageContext.allTags.map(tag => (
      <li key={tag}>
        <Link to={`/tag/${tag}`}>{tag}</Link>
      </li>
    ))}
  </ul>
)

AllTags.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default AllTags
