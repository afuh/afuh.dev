import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"

import SEO from '../utils/seo'
import { GlobalStyles, theme } from '../utils/styles'

const Layout = ({ children, location }) => (
  <>
    <SEO pathname={location.pathname}/>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <main>
        {children}
      </main>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout
