import { createContext, useState, type JSX } from 'react'

export type TResultContext = {
  perimeter: number
  area: number
  volume: number
}

export interface IResultContext {
  result: TResultContext
  handleResult: (calculate: TResultContext) => void
}

export const ResultContext = createContext<IResultContext | null>(null)

type Props = {
  children: JSX.Element
}

export const ResultContextProvider = ({ children }: Props) => {
  const initialResult: TResultContext = { perimeter: 0, area: 0, volume: 0 }
  const [result, setResult] = useState<TResultContext>(initialResult)

  const handleResult = (calculate: TResultContext) => {
    setResult({ ...calculate })
  }
  return (
    <ResultContext.Provider value={{ result, handleResult }}>{children}</ResultContext.Provider>
  )
}
