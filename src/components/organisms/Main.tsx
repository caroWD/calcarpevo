import type { JSX } from 'react'

type Props = {
  children: JSX.Element
}

export const Main = ({ children }: Props) => {
  return (
    <main className="max-h-[calc(100dvh-(--spacing(44)))] grow flex flex-col *:flex-1 rounded-[1.6875rem] border border-slate-400 dark:border-slate-900 p-4 bg-linear-120 from-slate-200 dark:from-[#050D33] to-slate-300 dark:to-slate-950 shadow-md overflow-y-auto">
      {children}
    </main>
  )
}
