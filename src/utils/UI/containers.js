import { number } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../styles'

export const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ margin }) => css`
    margin: 0 ${margin}% 0 ${margin*2}%;

    ${media.medium(css`
      margin: 0 ${margin*2}% 0 ${margin*4}%;
    `)}

    ${media.xlarge(css`
      margin: 0 ${margin*3}% 0 ${margin*6}%;
    `)}

    ${media.phone(css`
      margin: 0 ${margin}%;
    `)}
  `};
`

Inner.propTypes = {
  margin: number.isRequired
}

Inner.defaultProps = {
  margin: 6
}
