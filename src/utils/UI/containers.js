import { number, bool } from 'prop-types'
import styled, { css } from 'styled-components'

export const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme, padding }) => theme.globalPadding(padding)}
  ${({ paddingTop }) => paddingTop && css`
    padding-top: 120px;
  `};
`

Inner.propTypes = {
  padding: number.isRequired,
  paddingTop: bool.isRequired
}

Inner.defaultProps = {
  padding: 6,
  paddingTop: false
}
