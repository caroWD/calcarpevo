import Header from '@/components/organisms/Header'
import MainNav from '@/components/organisms/MainNav'
import type { JSX } from 'react'

type Props = {
  children: JSX.Element
}

const FiguresTypeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <MainNav />
    </>
  )
}

export default FiguresTypeLayout
