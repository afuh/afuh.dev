import React from 'react'
import PropTypes from 'prop-types'
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

const Project = ({ data }) => (
  <>
    <Image {...data} id='mobile'/>
    <Inner>
      <Wrapper>
        <Content {...data} id={'content'}/>
        <ExternalLinks {...data} id={'external'}/>
      </Wrapper>
    </Inner>
  </>
)

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project
