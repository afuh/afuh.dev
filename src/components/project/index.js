import React from 'react'
import styled, { css } from 'styled-components'

import Image from './image'
import ExternalLinks from './externalLinks'
import Content from './content'

import { Inner } from '../../utils/UI'

const Wrapper = styled.div(({ theme }) => css`
  display: flex;
  transform: translateY(-104px);
  ${theme.globalMargin()}

  ${theme.media.custom(880, css`
    transform: translateY(0);
  `)}

  ${theme.media.phone(css`
    flex-direction: column;

    #content {
      order: 2;
    }

    #external {
      order: 1;
    }
  `)}
`)

const Project = () => (
  <article>
    <Image id='mobile'/>
    <Inner>
      <Wrapper>
        <Content id='content'/>
        <ExternalLinks id='external'/>
      </Wrapper>
    </Inner>
  </article>
)

export default Project
