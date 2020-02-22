import React, { useState, createContext, useContext } from 'react'

import { theme as defaultTheme } from '../theme'

const Context = createContext()
export const useSwitchTheme = () => useContext(Context)

const SwitchThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const switchTheme = () => {
    setTheme({
      ...defaultTheme,
      secondary: theme.primary,
      primary: theme.secondary
    })
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
