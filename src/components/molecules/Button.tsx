import type { JSX } from 'react'

type Props = {
  type: 'icon' | 'text' | 'mix'
  children: JSX.Element | string | [JSX.Element, string]
  onClick: () => void
}

const Button = ({ type, children, onClick }: Props) => {
  return type === 'icon' ? (
    <button
      className="size-[1.875rem] flex justify-center items-center rounded-full bg-indigo-200"
      onClick={onClick}
    >
      {children}
    </button>
  ) : type === 'text' ? (
    <button className="py-6 px-3 text-white text-center text-xs bg-indigo-950" onClick={onClick}>
      {children}
    </button>
  ) : (
    <button
      className="w-full flex flex-col items-center gap-1.5 py-4 text-indigo-200 text-xs font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
