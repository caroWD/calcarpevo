import { NavLink } from 'react-router'
import Icon from '../atoms/Icon'
import type { IconsNames } from '@/models/types'

type Props = {
  label: string
  link: string
  icon: IconsNames
}

const FigureOption = ({ label, link, icon }: Props) => {
  const navLinkStyles: string =
    icon === 'cone'
      ? 'flex flex-col justify-center items-center gap-1.5 border-2 border-indigo-300 dark:border-indigo-950 rounded-2xl last:col-span-2'
      : 'flex flex-col justify-center items-center gap-1.5 border-2 border-indigo-300 dark:border-indigo-950 rounded-2xl'
  return (
    <NavLink to={link} className={navLinkStyles}>
      <Icon nameIcon={icon} size={6} />
      <span className="font-semibold text-[0.625rem]">{label}</span>
    </NavLink>
  )
}

export default FigureOption
