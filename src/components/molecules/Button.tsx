import type { JSX } from 'react'

type Props = {
  type: 'icon' | 'text' | 'mix'
  children: JSX.Element | string | [JSX.Element, string]
}

const Button = ({ type, children }: Props) => {
  return type === 'icon' ? (
    <button className="size-[1.875rem] flex justify-center items-center rounded-full bg-indigo-200">
      {children}
    </button>
  ) : type === 'text' ? (
    <button className="py-6 px-3 text-white text-center text-xs bg-indigo-950">{children}</button>
  ) : (
    <button>{children}</button>
  )
}

export default Button
