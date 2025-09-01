import type { JSX } from 'react'

type Props = {
  children: JSX.Element
}

const Main = ({ children }: Props) => {
  return (
    <main className="grow rounded-[1.6875rem] border border-slate-900 p-4 bg-linear-120 from-[#050D33] to-slate-950 shadow-md">
      {children}
    </main>
  )
}

export default Main
