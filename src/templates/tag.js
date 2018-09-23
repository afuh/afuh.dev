import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ pageContext }) => (
  <div>{pageContext.tag}</div>
)

Tags.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default Tags
