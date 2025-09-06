import { useLocation } from 'react-router'
import { Icon } from '../atoms/index'
import { createBreadcrums } from '@/utils/utils'
import { useContext } from 'react'
import { ThemeContext } from '@/context/index'
import type { ThemeContextType } from '@/models/types'

export const NavRoute = () => {
  const { pathname } = useLocation()

  const breadcrums = createBreadcrums(pathname)

  const [theme] = useContext(ThemeContext) as ThemeContextType

  return (
    <div className="grow flex justify-end items-center gap-1">
      <ul className="flex gap-0.5 text-indigo-700 dark:text-indigo-500 text-[0.625rem] 2xs:text-xs capitalize *:after:content-['/'] *:after:ml-0.5">
        {breadcrums.map((crum) => (
          <li
            key={crum}
            className="last:after:hidden last:font-medium last:text-indigo-600 dark:last:text-indigo-400"
          >
            {crum === 'figuras solidas' ? 'figuras sólidas' : crum}
          </li>
        ))}
      </ul>
      <div className="size-[1.875rem] flex justify-center items-center">
        <Icon
          nameIcon={
            breadcrums[1] === 'figuras planas' && theme === 'dark'
              ? 'flat figure'
              : breadcrums[1] === 'figuras planas' && theme === 'light'
                ? 'flat figure light'
                : breadcrums[1] === 'figuras solidas' && theme === 'dark'
                  ? 'solid figure'
                  : 'solid figure light'
          }
          size={5}
        />
      </div>
    </div>
  )
}
