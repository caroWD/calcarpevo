import { useLocation } from 'react-router'
import Icon from '../atoms/Icon'
import { createBreadcrums } from '@/utils/utils'

const NavRoute = () => {
  const { pathname } = useLocation()

  const breadcrums = createBreadcrums(pathname)

  return (
    <div className="grow flex justify-end items-center gap-1">
      <ul className="flex gap-0.5 text-indigo-500 text-[0.625rem] capitalize *:after:content-['/'] *:after:ml-0.5">
        {breadcrums.map((crum) => (
          <li key={crum} className="last:after:hidden last:font-medium last:text-indigo-400">
            {crum === 'figuras solidas' ? 'figuras sólidas' : crum}
          </li>
        ))}
      </ul>
      <div className="size-[1.875rem] flex justify-center items-center">
        <Icon
          nameIcon={breadcrums[1] === 'figuras planas' ? 'flat figure' : 'solid figure'}
          size={5}
        />
      </div>
    </div>
  )
}

export default NavRoute
