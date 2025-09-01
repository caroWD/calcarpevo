import Header from '@/components/organisms/Header'
import MainNav from '@/components/organisms/MainNav'
import SecondNav from '@/components/organisms/SecondNav'
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
