import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from "styled-components"

const fade = keyframes`
	0% {
		opacity: 0.1;
	}
	100% {
		opacity: 1;
	}
`

const Span = styled.span`
  ${({ time }) => time && css`
    animation ${fade} ${time}s ease;
  `}
`

export const FadeInText = ({ text, duration }) => {
  const addDec = int => parseFloat(int.toFixed(1))
  const random = max => Math.random() * (0.0 - addDec(max)) + addDec(max)

  return text.split("").map((letter, i) => (
    <Span
      key={i}
      time={random(duration)}
    >
      {letter}
    </Span>
  ))
}

FadeInText.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number
}

FadeInText.defaultProps = {
  duration: 2
}
