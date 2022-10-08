import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router'

import SEO from '../seo'
import { GlobalStyles } from '../../utils/styles'
import { useToggleTheme } from '../../utils/hooks'

import Header from './header'

const MainWrapper = styled.main(({ theme }) =>
  theme.media.phone(css`
    min-height: calc(100vh - ${theme.headerHeight.mobile}px);
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
    }
  `),
)

const Layout = ({ children, seo, heading }) => {
  const { theme } = useToggleTheme()
  const location = useLocation()

  return (
    <>
      <SEO {...seo} pathname={seo ? seo.pathname : location.pathname} />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header heading={heading} />
          <MainWrapper>
            <main>{children}</main>
          </MainWrapper>
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  seo: PropTypes.object,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default Layout
