import Icon from '../atoms/Icon'
import Logo from '../atoms/Logo'
import Button from '../molecules/Button'

const Header = () => {
  return (
    <header className="flex justify-between items-center border rounded-full border-indigo-900 p-3 bg-linear-120 from-[#272263] to-indigo-950">
      <Button type="icon">
        <Icon nameIcon="more vert" size={5} />
      </Button>
      <Logo mode="dark" />
      <Button type="icon">
        <Icon nameIcon="light mode" size={5} />
      </Button>
    </header>
  )
}

export default Header
