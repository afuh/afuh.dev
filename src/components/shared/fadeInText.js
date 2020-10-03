import React, { useState, useEffect, createElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const isSSR = typeof window === 'undefined'

const Span = styled.span`
  transition: opacity 0.5s ease-in-out;

  ${({ time, initialOpacity }) => css`
    transition-delay: ${time}s;
    opacity: ${!time ? initialOpacity : 1};
  `};
`

const Wrapper = styled.div`
  display: inline-block;

  ${({ theme }) =>
    theme.media.phone(css`
      display: block;
    `)}
`

const CharacterAnimation = ({ character, duration, initialOpacity }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const addDec = (int) => parseFloat(int.toFixed(1))
    const random = (max) => Math.random() * (0.0 - addDec(max)) + addDec(max)

    setTime(random(duration))
  }, [duration])

  return (
    <Span time={time} initialOpacity={initialOpacity}>
      {character}
    </Span>
  )
}

CharacterAnimation.propTypes = {
  character: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  initialOpacity: PropTypes.number.isRequired,
}

CharacterAnimation.defaultProps = {
  duration: 1,
  initialOpacity: 0.1,
}

export const FadeInText = (props) =>
  isSSR ? (
    createElement(props.as, null, props.children)
  ) : (
    <Wrapper {...props}>
      {props.children.split('').map((character, i) => (
        <CharacterAnimation key={i} character={character} {...props} />
      ))}
    </Wrapper>
  )

FadeInText.propTypes = {
  as: PropTypes.string,
}
