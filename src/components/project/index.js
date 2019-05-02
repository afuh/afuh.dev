import React from 'react'
import styled, { css } from "styled-components"

import Image from './image'
import ExternalLinks from './externalLinks'
import Content from './content'

import { Inner } from '../../utils/UI'
import { media } from '../../utils/styles'

const Wrapper = styled.div`
  display: flex;
  margin: 40px 0 60px;

  ${media.phone(css`
    margin-top: 20px;
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
  <>
    <Image id='mobile'/>
    <Inner>
      <Wrapper>
        <Content id='content'/>
        <ExternalLinks id='external'/>
      </Wrapper>
    </Inner>
  </>
)

export default Project
