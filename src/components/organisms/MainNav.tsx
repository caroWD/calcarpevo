import Button from '../molecules/Button'
import Icon from '../atoms/Icon'
import { useNavigate } from 'react-router'

const MainNav = () => {
  const navigate = useNavigate()

  return (
    <nav className="border border-indigo-900 rounded-[1.6875rem] bg-linear-120 from-[#272263] to-indigo-950 shadow-md">
      <ul className="flex *:flex-1">
        <li>
          <Button type="mix" onClick={() => navigate('/figuras-planas')}>
            <Icon nameIcon="flat figure" size={6} />
            Figuras Planas
          </Button>
        </li>
        <li>
          <Button type="mix" onClick={() => navigate('/figuras-solidas')}>
            <Icon nameIcon="solid figure" size={6} />
            Figuras Sólidas
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
