import { useContext } from 'react'
import Icon from '../atoms/Icon'
import Logo from '../atoms/Logo'
import Button from '../molecules/Button'
import { ThemeContext } from '@/context/ThemeContextProvider'
import type { ThemeContextType } from '@/models/types'

const Header = () => {
  const [theme, handleTheme] = useContext(ThemeContext) as ThemeContextType

  return (
    <header className="flex justify-between items-center border rounded-full border-indigo-300 dark:border-indigo-900 p-3 bg-linear-120 from-indigo-100 dark:from-[#272263] to-indigo-200 dark:to-indigo-950 shadow-md">
      <Button
        type="icon"
        onClick={() => {
          console.log('more vert icon')
        }}
      >
        <Icon nameIcon="more vert" size={5} />
      </Button>
      <Logo mode={theme === 'dark' ? 'dark' : 'light'} />
      <Button type="icon" onClick={handleTheme}>
        <Icon nameIcon={theme === 'dark' ? 'light mode' : 'dark mode'} size={5} />
      </Button>
    </header>
  )
}

export default Header
