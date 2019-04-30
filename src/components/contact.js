import React from 'react'
import PropTypes from 'prop-types'

import { Inner } from '../utils/UI'

const Contact = ({ data }) => (
  <Inner>
    <div dangerouslySetInnerHTML={{ __html: data.md.html }} />
  </Inner>
)

Contact.propTypes = {
  data: PropTypes.object.isRequired
}

export default Contact
