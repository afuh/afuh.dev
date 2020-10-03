import React from 'react'
import ContextProviders from './src/context'

export const wrapRootElement = ({ element }) => {
  return <ContextProviders>{element}</ContextProviders>
}
