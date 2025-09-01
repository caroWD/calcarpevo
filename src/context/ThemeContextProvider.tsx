import { createContext, useEffect, useState, type JSX } from 'react'

export const ThemeContext = createContext(['', () => {}])

type Props = {
  children: JSX.Element
}

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={[theme, handleTheme]}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
