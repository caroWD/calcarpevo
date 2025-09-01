import Icon from '../atoms/Icon'

const NavRoute = () => {
  return (
    <div className="grow flex justify-end items-center gap-1">
      <ul className="flex">
        <li>Home</li>
      </ul>
      <div className="size-[1.875rem] flex justify-center items-center">
        <Icon nameIcon="flat figure" size={5} />
      </div>
    </div>
  )
}

export default NavRoute
