import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../../utils/globalStyles'
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

const Layout = ({ children, heading }) => {
  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header heading={heading} />
        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default Layout
