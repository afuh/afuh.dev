import React, { useState, createContext, useContext } from 'react'

import { theme as lightTheme } from '../utils/theme'

const Context = createContext()

const cacheKey = 'af-theme'
const isSSR = typeof window === 'undefined'
const darkTheme = Object.assign({}, lightTheme, { secondary: lightTheme.primary, primary: lightTheme.secondary })

const getTheme = () => {
  const cache = !isSSR && localStorage.getItem(cacheKey)
  const isLightTheme = cache ? JSON.parse(cache) : true

  return { isLightTheme, defaultTheme: isLightTheme ? lightTheme : darkTheme }
}

const ToggleThemeProvider = ({ children }) => {
  const { defaultTheme, isLightTheme } = getTheme()
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    setTheme(!isLightTheme ? lightTheme : darkTheme)
    !isSSR && localStorage.setItem(cacheKey, JSON.stringify(!isLightTheme))
  }

  return (
    <Context.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </Context.Provider>
  )
}

export const useToggleTheme = () => useContext(Context)

export default ToggleThemeProvider
