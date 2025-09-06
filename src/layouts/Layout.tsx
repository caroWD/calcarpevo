import { Header, MainNav, Overlay, SecondNav } from '@/components/organisms/index'
import { useRef, type JSX } from 'react'
import { useLocation } from 'react-router'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation()

  const overlay = useRef<HTMLDivElement | null>(null)

  const showOverlay = () => {
    if (overlay !== null) {
      overlay.current?.classList.toggle('hidden')
    }
  }

  return (
    <>
      <Header onClick={showOverlay} />
      {children}
      {pathname === '/' ? <MainNav /> : <SecondNav />}
      <Overlay ref={overlay} onClick={showOverlay} />
    </>
  )
}

export default Layout
