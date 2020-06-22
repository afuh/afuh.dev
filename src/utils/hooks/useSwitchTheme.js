import React, { useState, createContext, useContext } from 'react'

import { theme as light } from '../theme'

const Context = createContext()
export const useSwitchTheme = () => useContext(Context)

const isSSR = typeof window === 'undefined'
const cacheKey = 'af-theme'

const SwitchThemeProvider = ({ children }) => {
  const cache = !isSSR && localStorage.getItem(cacheKey)
  const isLight = cache ? JSON.parse(cache) : true
  const dark = Object.assign({}, light, { secondary: light.primary, primary: light.secondary })
  const [theme, setTheme] = useState(isLight ? light : dark)

  const switchTheme = () => {
    setTheme(!isLight ? light : dark)
    !isSSR && localStorage.setItem(cacheKey, JSON.stringify(!isLight))
  }

  return (
    <Context.Provider value={{
      theme,
      switchTheme
    }}>
      {children}
    </Context.Provider>
  )
}

export default SwitchThemeProvider
