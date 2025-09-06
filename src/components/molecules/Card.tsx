import type { JSX } from 'react'

type CardProps = {
  title: string
  children: JSX.Element
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <article className="border border-indigo-300 dark:border-indigo-950 rounded-2xl">
      <div className="border-b border-indigo-300 dark:border-b-indigo-950 px-4 py-2">
        <h2 className="font-medium text-xs text-slate-800 dark:text-white 2xs:text-sm">{title}</h2>
      </div>
      {children}
    </article>
  )
}
