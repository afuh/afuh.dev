import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"
import Img from 'gatsby-image'

import { media } from '../../utils/styles'

const ImageWrapper = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset -2px 4px 10px rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
  }

  &#mobile {
    display: none;
    visibility: hidden;

    ${media.phone(css`
      display: block;
      visibility: visible;
    `)}
  }

  &#desktop {
    ${media.phone(css`
      display: none;
      visibility: hidden;
    `)}
  }
`

const Image = ({ image, title, id }) => (
  <ImageWrapper id={id}>
    <Img
      fluid={image.fluid}
      alt={title}
    />
  </ImageWrapper>
)

Image.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default Image
