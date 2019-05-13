/* eslint react/prop-types: 0  */
import React from "react"

import ViewdProjectProvider from './src/utils/hooks/useViewedProject'

export const wrapRootElement = ({ element }) => (
  <ViewdProjectProvider>
    {element}
  </ViewdProjectProvider>
)
