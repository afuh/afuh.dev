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
          title={seo && seo.title}
          description={seo && seo.description}
          pathname={seo ? seo.pathname : location.pathname}
          image={seo && seo.image}
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
