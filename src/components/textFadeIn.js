import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from "styled-components"

const fade = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Span = styled.span`
  ${({ time }) => time && css`
    animation ${fade} ${time*2}s;
  `}
`

export default class FadeIn extends React.Component {
  state = {
    text: []
  }

  componentDidMount(){
    const { text } = this.props
    this.setState({ text: text.split("") })
  }

  render(){
    const { text } = this.state
    const { duration } = this.props

    const addDec = int => parseFloat(int.toFixed(1))
    const random = max => Math.random() * (0.0 - addDec(max)) + addDec(max)

    return (
      <>
        {text.map((letter, i) => (
          <Span
            key={i}
            time={random(duration)}
          >
            {letter}
          </Span>
        ))}
      </>
    )
  }
}

FadeIn.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number
}

FadeIn.defaultProps = {
  duration: 2
}
