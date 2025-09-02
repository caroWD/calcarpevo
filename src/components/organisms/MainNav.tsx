import { Button } from '../molecules/index'
import { Icon } from '../atoms/index'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContextProvider'
import type { ThemeContextType } from '@/models/types'

export const MainNav = () => {
  const navigate = useNavigate()

  const [theme] = useContext(ThemeContext) as ThemeContextType

  return (
    <nav className="border border-indigo-300 dark:border-indigo-900 rounded-[1.6875rem] bg-linear-120 from-indigo-100 dark:from-[#272263] to-indigo-200 dark:to-indigo-950 shadow-md">
      <ul className="flex *:flex-1">
        <li>
          <Button type="mix" onClick={() => navigate('/figuras-planas')}>
            <Icon nameIcon={theme === 'dark' ? 'flat figure' : 'flat figure light'} size={6} />
            Figuras Planas
          </Button>
        </li>
        <li>
          <Button type="mix" onClick={() => navigate('/figuras-solidas')}>
            <Icon nameIcon={theme === 'dark' ? 'flat figure' : 'solid figure light'} size={6} />
            Figuras Sólidas
          </Button>
        </li>
      </ul>
    </nav>
  )
}
