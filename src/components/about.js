import React from 'react'
import PropTypes from 'prop-types'

import { Inner, MarkdownWrapper } from '../utils/UI'

const About = ({ text }) => (
  <Inner
    margin
    css='margin-bottom: 40px;'
  >
    <MarkdownWrapper
      as='section'
      html={text.md.html}
    />
  </Inner>
)

About.propTypes = {
  text: PropTypes.object.isRequired
}

export default About
