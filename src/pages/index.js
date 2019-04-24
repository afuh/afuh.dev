import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from "styled-components"

import Layout from '../components/layout'

import { FadeInText, SocialIcons } from '../utils/UI'
import { useSiteMeta } from '../utils/hooks'
import { fontSize } from '../utils/styles'

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Content = styled.section`
  height: 100vh;

  text-align: center;
`

const Inner = styled.div`
  width: 100%;
  position: relative;
`

const Title = styled.h1`
	${fontSize(4)};
	letter-spacing: 0.4rem;
  margin: 0;
`

const SubTitle = styled.h2`
	${fontSize(3)};
  font-weight: 400;
  margin: 0;
`

const HiddenTitle = styled(Title)`
  position: absolute;
  width: 100%;
  top: 0;
  color: transparent;

  &::selection {
    background: #000;
    color: #fff;
  }
`

const Social = styled(SocialIcons)`
	animation: ${fadeIn} 1s;
`

const IndexPage = () => {
  const { title, description } = useSiteMeta()

  return (
    <Layout>
      <Content>
        <Inner>
          <Title>
            <FadeInText text={title} duration={3} />
          </Title>
          <HiddenTitle>{title.split(" ").reverse().join(" ")}</HiddenTitle>
          <SubTitle>
            {description}
          </SubTitle>
        </Inner>
        <Social />
      </Content>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      meta: PropTypes.object.isRequired
    })
  })
}

export default IndexPage
