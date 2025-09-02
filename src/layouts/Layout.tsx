import { Header, MainNav, SecondNav } from '@/components/organisms/index'
import type { JSX } from 'react'
import { useLocation } from 'react-router'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation()
  return (
    <>
      <Header />
      {children}
      {pathname === '/' ? <MainNav /> : <SecondNav />}
    </>
  )
}

export default Layout
