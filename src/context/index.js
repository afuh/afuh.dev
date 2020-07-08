import React from 'react'

import ToggleTheme from './toggleTheme'
import TrackProject from './trackProject'

const ContextProviders = ({ children }) => (
  <TrackProject>
    <ToggleTheme>
      {children}
    </ToggleTheme>
  </TrackProject>
)

export default ContextProviders