import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { useProjectData } from '../../utils/hooks'

const ImageWrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    max-width: 720px;

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

      ${theme.media.phone(css`
        display: block;
        visibility: visible;
      `)}
    }

    &#desktop {
      ${theme.media.phone(css`
        display: none;
        visibility: hidden;
      `)}
    }
  `,
)

const Image = ({ id }) => {
  const { image, title } = useProjectData()

  return (
    <ImageWrapper id={id}>
      <GatsbyImage image={image.gatsbyImageData} alt={title} />
    </ImageWrapper>
  )
}

Image.propTypes = {
  id: PropTypes.string,
}

export default Image
