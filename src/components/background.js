import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  overflow: hidden;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;

    transition: all 20s cubic-bezier(0.690, 0.005, 0.000, 1.005);
  }
`
const paths = ["M473.5 0C765.88 314.023 609.915 570.492 960 900H0V0H473.5Z;", "M473.5 0C536.529 365.967 912.279 531.314 960 900H0V0H473.5Z;"]

const Animate = ({ values, color, opacity }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1300 900"
    preserveAspectRatio='none'
  >
    <path fillOpacity={opacity} fill={color}>
      <animate
        keyTimes="0; 0.5; 1" keySplines="0.25 0 0.75 1; 0.25 0 0.75 1" calcMode="spline"
        attributeName="d"
        repeatCount="indefinite"
        dur="40s"
        values={values}
      />
    </path>
  </svg>
)

Animate.propTypes = {
  values: PropTypes.string.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Animate.defaultProps = {
  color: '#fff',
  opacity: 1
}

const Background = () => (
  <Wrapper>
    <Animate
      values={paths[1] + paths[0] + paths[1]}
      color="#000"
      opacity={0.6}
    />
  </Wrapper>
)

export default Background
