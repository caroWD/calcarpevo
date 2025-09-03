import type { FormContext } from '@/context/FormContextProvider'
import type { ResultContext } from '@/context/ResultContextProvider'

const squareCalculate = (sides: number, result: ResultContext) => {
  return { ...result, perimeter: 4 * sides, area: sides * sides } as ResultContext
}

export const calculate = (data: FormContext, result: ResultContext) => {
  switch (data.type) {
    case 'square':
      return squareCalculate(data.sides as number, result)

    default:
      break
  }
  return result
}
