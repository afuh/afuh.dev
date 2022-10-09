import React from 'react'
import type { GatsbyBrowser } from 'gatsby'

import ContextProviders from './src/context'

export const wrapRootElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <ContextProviders>{element}</ContextProviders>
}
