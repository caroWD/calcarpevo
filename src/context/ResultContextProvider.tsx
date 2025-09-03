import { createContext, useState, type JSX } from 'react'

export type ResultContext = {
  perimeter: number
  area: number
  volume: number
}

export interface IResultContext {
  result: ResultContext
  handleResult: (calculate: ResultContext) => void
}

export const ResultContext = createContext<IResultContext | null>(null)

type Props = {
  children: JSX.Element
}

export const ResultContextProvider = ({ children }: Props) => {
  const initialResult: ResultContext = { perimeter: 0, area: 0, volume: 0 }
  const [result, setResult] = useState<ResultContext>(initialResult)

  const handleResult = (calculate: ResultContext) => {
    setResult({ ...calculate })
  }
  return (
    <ResultContext.Provider value={{ result, handleResult }}>{children}</ResultContext.Provider>
  )
}
