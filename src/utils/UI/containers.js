import { number } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../styles'

export const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ padding }) => css`
    padding: 0 ${padding}% 0 ${padding*2}%;

    ${media.medium(css`
      padding: 0 ${padding*2}% 0 ${padding*4}%;
    `)}

    ${media.xlarge(css`
      padding: 0 ${padding*3}% 0 ${padding*6}%;
    `)}

    ${media.phone(css`
      padding: 0 ${padding}%;
    `)}
  `};
`

Inner.propTypes = {
  padding: number.isRequired
}

Inner.defaultProps = {
  padding: 6
}
