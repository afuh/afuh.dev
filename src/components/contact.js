import React from 'react'
import PropTypes from 'prop-types'

import { Inner, MarkdownWrapper } from '../utils/UI'

const Contact = ({ data }) => (
  <Inner margin>
    <MarkdownWrapper
      as='section'
      html={data.md.html}
    />
  </Inner>
)

Contact.propTypes = {
  data: PropTypes.object.isRequired
}

export default Contact
