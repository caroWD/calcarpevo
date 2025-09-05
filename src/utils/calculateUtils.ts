import type { TFormContext } from '@/context/FormContextProvider'
import type { TResultContext } from '@/context/ResultContextProvider'

const squareCalculate = (sides: number, result: TResultContext) => {
  return { ...result, perimeter: 4 * sides, area: sides * sides } as TResultContext
}

const rectangleCalculate = (sideA: number, sideB: number, result: TResultContext) => {
  return { ...result, perimeter: 2 * sideA + 2 * sideB, area: sideA * sideB }
}

export const calculate = (data: TFormContext, result: TResultContext) => {
  switch (data.type) {
    case 'square':
      return squareCalculate(data.sides as number, result)

    case 'rectangle':
      return rectangleCalculate(data.sideA as number, data.sideB as number, result)

    default:
      break
  }
  return result
}
