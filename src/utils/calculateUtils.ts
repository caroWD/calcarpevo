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

const parallelogramCalculate = (
  sideA: number,
  sideB: number,
  angle: number,
  result: TResultContext,
) => {
  return {
    ...result,
    perimeter: 2 * sideA + 2 * sideB,
    area: Number((Math.sin(angle * (Math.PI / 180)) * sideB).toFixed(2)),
  }
}

const trapezeCalculate = (
  sideA: number,
  sideB: number,
  sideC: number,
  sideD: number,
  height: number,
  result: TResultContext,
) => {
  return {
    ...result,
    perimeter: sideA + sideB + sideC + sideD,
    area: Number(((sideA + sideB) / 2) * height),
  }
}

const polygonCalculate = (sides: number, apothem: number, result: TResultContext) => {
  const perimeter = 6 * sides

  return { ...result, perimeter, area: (perimeter * apothem) / 2 }
}

const circleCalcule = (radio: number, result: TResultContext) => {
  return {
    ...result,
    perimeter: Number((2 * Math.PI * radio).toFixed(2)),
    area: Number((2 * Math.PI * radio ** 2).toFixed(2)),
  }
}

const pyramidCalculate = (base: number, height: number, result: TResultContext) => {
  return { ...result, volume: Number(((1 / 3) * base * height).toFixed(2)) }
}

const cubeCalculate = (sides: number, result: TResultContext) => {
  return { ...result, volume: Number((sides ** 3).toFixed(2)) }
}

const parallelepipedCalculate = (
  sideA: number,
  sideB: number,
  sideC: number,
  result: TResultContext,
) => {
  return { ...result, volume: Number((sideA * sideB * sideC).toFixed(2)) }
}

const sphereCalculate = (radio: number, result: TResultContext) => {
  return { ...result, volume: Number(((4 / 3) * Math.PI * radio ** 3).toFixed(2)) }
}

const cylinderCalculate = (radio: number, height: number, result: TResultContext) => {
  return { ...result, volume: Number((Math.PI * radio ** 2 * height).toFixed(2)) }
}

const coneCalculate = (radio: number, height: number, result: TResultContext) => {
  return { ...result, volume: Number(((Math.PI * radio ** 2 * height) / 3).toFixed(2)) }
}

export const calculate = (data: TFormContext, result: TResultContext) => {
  const {
    type,
    sides = 0,
    sideA = 0,
    sideB = 0,
    sideC = 0,
    sideD = 0,
    height = 0,
    radio = 0,
    apothem = 0,
    diagonal = 0,
    angle = 0,
    base = 0,
  } = data

  switch (type) {
    case 'square':
      return squareCalculate(sides, result)

    case 'rectangle':
      return rectangleCalculate(sideA, sideB, result)

    case 'triangle':
      return triangleCalculate(sideA, sideB, sideC, result)

    case 'diamond':
      return diamondCalculate(sides, diagonal, result)

    case 'parallelogram':
      return parallelogramCalculate(sideA, sideB, angle, result)

    case 'trapeze':
      return trapezeCalculate(sideA, sideB, sideC, sideD, height, result)

    case 'polygon':
      return polygonCalculate(sides, apothem, result)

    case 'circle':
      return circleCalcule(radio, result)

    case 'pyramid':
      return pyramidCalculate(base, height, result)

    case 'cube':
      return cubeCalculate(sides, result)

    case 'parallelepiped':
      return parallelepipedCalculate(sideA, sideB, sideC, result)

    case 'sphere':
      return sphereCalculate(radio, result)

    case 'cylinder':
      return cylinderCalculate(radio, height, result)

    case 'cone':
      return coneCalculate(radio, height, result)

    default:
      return result
  }
}
