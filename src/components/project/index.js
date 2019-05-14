import React from 'react'
import styled, { css } from "styled-components"

import Image from './image'
import ExternalLinks from './externalLinks'
import Content from './content'

import { Inner } from '../../utils/UI'
import { media } from '../../utils/styles'

const Wrapper = styled.div`
  display: flex;
  transform: translateY(-104px);
  ${({ theme }) => theme.globalMargin()}

  ${media.custom(880, css`
    transform: translateY(0);
  `)}

  ${media.phone(css`
    flex-direction: column;

    #content {
      order: 2;
    }

    #external {
      order: 1;
    }
  `)}
`

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
