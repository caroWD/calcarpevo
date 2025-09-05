import { type JSX } from 'react'

type Props = {
  type: 'icon' | 'text' | 'mix' | 'submit'
  children: JSX.Element | string | [JSX.Element, string]
  onClick?: () => void
}

export const Button = ({ type, children, onClick }: Props) => {
  return type === 'icon' ? (
    <button
      className="size-[1.875rem] flex justify-center items-center rounded-full bg-indigo-300 dark:bg-indigo-200"
      onClick={onClick}
    >
      {children}
    </button>
  ) : type === 'text' ? (
    <button
      className="rounded-full px-6 py-3 text-slate-950 dark:text-white text-center text-xs leading-none bg-indigo-300 dark:bg-indigo-950"
      onClick={onClick}
    >
      {children}
    </button>
  ) : type === 'mix' ? (
    <button
      className="w-full flex flex-col items-center gap-1.5 py-4 text-indigo-500 dark:text-indigo-200 text-xs font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button
      className="rounded-full px-6 py-3 text-slate-950 dark:text-white text-center text-xs leading-none bg-indigo-300 dark:bg-indigo-950"
      type="submit"
      form="figureForm"
    >
      {children}
    </button>
  )
}
