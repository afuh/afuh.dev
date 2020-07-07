import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'

import SEO from '../seo'
import { GlobalStyles } from '../../utils/styles'
import { useToggleTheme, useLocation } from '../../utils/hooks'

import Header from './header'
import Footer from './footer'

const Main = styled.main(({ theme }) => theme.media.phone(css`
  min-height: calc(100vh - ${theme.headerHeight.desktop}px);
  display: flex;
  justify-content: center;
  align-items: center;
`))

const Layout = ({ children, seo, heading }) => {
  const { theme } = useToggleTheme()
  const { location } = useLocation()

  return (
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
}

Layout.propTypes = {
  seo: PropTypes.object,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default Layout
