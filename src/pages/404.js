import React from 'react'
import styled, { css } from 'styled-components'

import Layout from '../components/layout'

const Wrapper = styled.div`
  ${({ theme }) =>
    theme &&
    css`
      min-height: calc(100vh - ${theme.headerHeight.desktop}px);
    `};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    max-width: 640px;
  }
`

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`

const NotFoundPage = () => (
  <Layout heading="404">
    <Wrapper>
      <h2>The page you are looking for doesn&apos;t exist, but here is a cute cat for you.</h2>
      <ImageWrapper>
        <img src="https://source.unsplash.com/random/300x300/?cat,cats" alt="🐈" />
      </ImageWrapper>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
