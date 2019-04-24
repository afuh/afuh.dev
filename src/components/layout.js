import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"
import { Location } from '@reach/router'

import SEO from '../utils/seo'
import { GlobalStyles, theme } from '../utils/styles'

const Layout = ({ children, seo }) => (
  <Location>
    {({ location }) => (
      <>
        <SEO
          {...seo}
          pathname={seo ? seo.pathname : location.pathname}
        />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <main>
              {children}
            </main>
          </>
        </ThemeProvider>
      </>
    )}
  </Location>
)

Layout.propTypes = {
  seo: PropTypes.object
}

export default Layout
