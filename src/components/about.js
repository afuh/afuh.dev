import React from 'react'
import PropTypes from 'prop-types'

import { Inner, MarkdownWrapper } from '../utils/UI'

const About = ({ data }) => (
  <Inner paddingTop>
    <MarkdownWrapper
      html={data.md.html} />
  </Inner>
)

About.propTypes = {
  data: PropTypes.object.isRequired
}

export default About
