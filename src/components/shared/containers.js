import { number, bool } from 'prop-types'
import styled, { css } from 'styled-components'

export const Inner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 6% 0 12%;

    ${theme.media.phone(css`
      padding: 0 6%;
    `)}
  `}
`

Inner.propTypes = {
  padding: number.isRequired,
  margin: bool.isRequired,
}

Inner.defaultProps = {
  padding: 6,
  margin: false,
}
