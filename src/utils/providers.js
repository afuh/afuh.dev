/* eslint-disable */
import React from 'react'

import ViewedProjectProvider from '../utils/hooks/useViewedProject'
import SwitchThemeProvider from '../utils/hooks/useSwitchTheme'


export const wrapRootElement = ({ element }) => (
  <ViewedProjectProvider>
    <SwitchThemeProvider>
      {element}
    </SwitchThemeProvider>
  </ViewedProjectProvider>
)
