import React from 'react'
import ContextProviders from './src/context'

export const wrapRootElement = ({ element }) => (
  <ContextProviders>
    {element}
  </ContextProviders>
)
