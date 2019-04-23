import React from 'react'
import { ThemeProvider } from "styled-components"
import { Location } from '@reach/router'

import SEO from '../utils/seo'
import { GlobalStyles, theme } from '../utils/styles'

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <>
        <SEO pathname={location.pathname}/>
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

export default Layout
