import { NavLink } from 'react-router'
import Icon from '../atoms/Icon'
import type { IconsNames } from '@/models/types'

type Props = {
  label: string
  link: string
  icon: IconsNames
}

const FigureOption = ({ label, link, icon }: Props) => {
  return (
    <NavLink
      to={link}
      className="flex flex-col justify-center items-center gap-1.5 border-2 border-indigo-950 rounded-2xl"
    >
      <Icon nameIcon={icon} size={6} />
      <span className="font-semibold text-[0.625rem]">{label}</span>
    </NavLink>
  )
}

export default FigureOption
