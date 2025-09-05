import type { TFormContext } from '@/context/FormContextProvider'
import type { TResultContext } from '@/context/ResultContextProvider'

const squareCalculate = (sides: number, result: TResultContext) => {
  return { ...result, perimeter: 4 * sides, area: sides * sides } as TResultContext
}

export const calculate = (data: TFormContext, result: TResultContext) => {
  switch (data.type) {
    case 'square':
      return squareCalculate(data.sides as number, result)

    default:
      break
  }
  return result
}
