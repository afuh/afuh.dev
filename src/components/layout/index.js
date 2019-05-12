import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from "styled-components"

import SEO from '../../utils/seo'
import withLocation from '../../utils/withLocation'
import { GlobalStyles, theme, media } from '../../utils/styles'

import Header from './header'
import Footer from './footer'

const Main = styled.main`
  position: relative;

  ${({ theme }) => theme && css`
    min-height: calc(100vh - ${theme.headerHeight.desktop}px);
    background: ${theme.white};
  `};

  ${media.phone(css`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}

`

const Layout = ({ children, seo, heading, location }) => (
  <>
    <SEO
      {...seo}
      pathname={seo ? seo.pathname : location.pathname}
    />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header heading={heading} />
        <Main>
          {children}
        </Main>
        <Footer />
      </>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  seo: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default withLocation(Layout)
