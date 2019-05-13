import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"

const Span = styled.span`
	transition: opacity .5s ease-in-out;

	${({ time, initialOpacity }) => css`
		transition-delay: ${time}s;
		opacity: ${!time ? initialOpacity : 1};
	`};
`

const Letter = ({ letter, duration, initialOpacity }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const addDec = int => parseFloat(int.toFixed(1))
    const random = max => Math.random() * (0.0 - addDec(max)) + addDec(max)

    setTime(random(duration))
  }, [ duration ])

  return (
    <Span
      time={time}
      initialOpacity={initialOpacity}
    >
      {letter}
    </Span>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  initialOpacity: PropTypes.number.isRequired
}

Letter.defaultProps = {
  duration: 1,
  initialOpacity: 0.1
}

const Wrapper = styled.div``

export const FadeInText = props => (
  <Wrapper {...props}>
    {props.children.split("").map((letter, i) => (
      <Letter
        key={i}
        letter={letter}
        {...props}
      />
    ))}
  </Wrapper>
)
