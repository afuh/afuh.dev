import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { List as _List, Inner } from '../shared'

const List = styled(_List)`
  margin-bottom: 60px;

  ul {
    position: relative;

    li {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const Wrapper = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.globalMargin(80)}
    ${theme.media.phone(css`
      width: 100%;
    `)}
  `,
)

const Home = ({ data }) => (
  <Wrapper>
    <Inner>
      <List data={data} />
    </Inner>
  </Wrapper>
)

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home
