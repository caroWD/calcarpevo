import { useNavigate } from 'react-router'
import { Icon } from '../atoms/index'
import { Button, NavRoute } from '../molecules/index'

export const SecondNav = () => {
  const navigate = useNavigate()

  return (
    <nav className="flex justify-between items-center gap-4 rounded-full shadow-md border border-indigo-300 dark:border-indigo-900 p-3 bg-linear-120 from-indigo-100 dark:from-[#272263] to-indigo-200 dark:to-indigo-950">
      <Button type="icon" onClick={() => navigate(-1)}>
        <Icon nameIcon="arrow back" size={5} />
      </Button>
      <NavRoute />
    </nav>
  )
}
