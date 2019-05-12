import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { List as BaseComponent } from '../utils/UI'
import { media } from '../utils/styles'

const List = styled(BaseComponent)`
  margin-bottom: 60px;

  ul {
    position: relative;
    border-left: 1px solid ${({ theme }) => theme.softGray};

    ${media.phone(css`
      border-left: none;
      width: 100%;
    `)}

    &::before  {
      content: "${p => p.title}";
      display: inline-block;
      position: absolute;
      top: 0;
      left: -2px;
      text-transform: uppercase;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.gray};
      transform: rotate(90deg);
	    transform-origin: top left;

      ${media.phone(css`
        transform: none;
        position: inherit;
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.softGray};
        margin-bottom: 10px;
      `)}
    }

    li {
      padding-left: 1.6rem;

      ${media.phone(css`
        padding-left: 0;
      `)}

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const Wrapper = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight.desktop}px);
  margin: 80px 0 20px;
  display: flex;
  flex-direction: column;

  ${media.phone(css`
    width: 100%;
    margin: 60px 0 0;
  `)}
`

const Home = ({ data }) => {
  const type = data.reduce((acc, project) => {
    const key = project.isWork ? 'work' : 'personal'
    acc[key].push(project)
    return acc
  }, {
    personal: [],
    work: []
  })

  return (
    <Wrapper>
      <List
        title={'work'}
        data={type.work}
      />
      <List
        title={'personal'}
        data={type.personal}
      />
    </Wrapper>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home
