import React from 'react'
import PropTypes from 'prop-types'

import { Inner } from '../utils/UI'

const About = ({ data }) => (
  <Inner>
    <div dangerouslySetInnerHTML={{ __html: data.md.html }} />
  </Inner>
)

About.propTypes = {
  data: PropTypes.object.isRequired
}

export default About
