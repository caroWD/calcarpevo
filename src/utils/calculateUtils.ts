import type { TFormContext } from '@/context/FormContextProvider'
import type { TResultContext } from '@/context/ResultContextProvider'

const validateRightTriangle = (sides: number[]) => {
  const hipotenuse = Math.max(...sides)

  const legs = sides.filter((side) => side !== hipotenuse)

  const isRightTriangle = hipotenuse ** 2 === legs[0] ** 2 + legs[1] ** 2

  return { isRightTriangle, legs }
}

const squareCalculate = (sides: number, result: TResultContext) => {
  return { ...result, perimeter: 4 * sides, area: sides * sides } as TResultContext
}

const rectangleCalculate = (sideA: number, sideB: number, result: TResultContext) => {
  return { ...result, perimeter: 2 * sideA + 2 * sideB, area: sideA * sideB }
}

const triangleCalculate = (sideA: number, sideB: number, base: number, result: TResultContext) => {
  const perimeter = sideA + sideB + base

  const { isRightTriangle, legs } = validateRightTriangle([sideA, sideB, base])

  if (isRightTriangle) {
    return {
      ...result,
      perimeter,
      area: Number(((Math.min(...legs) * Math.max(...legs)) / 2).toFixed(2)),
    }
  }

  if (base !== sideA && base !== sideB && sideA !== sideB) {
    const unknown = Number(((sideA ** 2 + base ** 2 - sideB ** 2) / (2 * base)).toFixed(2))

    const height = Number(Math.sqrt(sideA ** 2 - unknown ** 2).toFixed(2))

    return { ...result, perimeter, area: Number(((base * height) / 2).toFixed(2)) }
  }
  const height = Number(Math.sqrt(sideB ** 2 - (base / 2) ** 2).toFixed(2))

  return { ...result, perimeter, area: Number(((base * height) / 2).toFixed(2)) }
}

const diamondCalculate = (sides: number, horizontaDiagonal: number, result: TResultContext) => {
  const verticalDiagonal = Number(Math.sqrt(sides ** 2 - (horizontaDiagonal / 2) ** 2).toFixed(2))

  return {
    ...result,
    perimeter: 4 * sides,
    area: Number(((horizontaDiagonal * (2 * verticalDiagonal)) / 2).toFixed(2)),
  }
}

export const calculate = (data: TFormContext, result: TResultContext) => {
  const { type, sides = 0, sideA = 0, sideB = 0, sideC = 0, diagonal = 0 } = data

  switch (type) {
    case 'square':
      return squareCalculate(sides, result)

    case 'rectangle':
      return rectangleCalculate(sideA, sideB, result)

    case 'triangle':
      return triangleCalculate(sideA, sideB, sideC, result)

    case 'diamond':
      return diamondCalculate(sides, diagonal, result)

    default:
      break
  }
  return result
}
