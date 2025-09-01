import Icon from '../atoms/Icon'
import Button from '../molecules/Button'
import NavRoute from '../molecules/NavRoute'

const SecondNav = () => {
  return (
    <nav className="flex justify-between items-center gap-4 rounded-full shadow-md border border-indigo-900 p-3 bg-linear-120 from-[#272263] to-indigo-950">
      <Button type="icon">
        <Icon nameIcon="arrow back" size={5} />
      </Button>
      <NavRoute />
    </nav>
  )
}

export default SecondNav
