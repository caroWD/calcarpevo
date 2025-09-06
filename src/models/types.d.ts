export type IconsNames =
  | 'arrow back'
  | 'circle'
  | 'close'
  | 'cone'
  | 'cube'
  | 'cylinder'
  | 'dark mode'
  | 'diamond'
  | 'flat figure'
  | 'flat figure light'
  | 'light mode'
  | 'more vert'
  | 'parallelogram'
  | 'polygon'
  | 'pyramid'
  | 'rectangle'
  | 'solid figure'
  | 'solid figure light'
  | 'sphere'
  | 'square'
  | 'trapeze'
  | 'triangle'

export type ThemeContextType = [string, () => void]

export type FigureOptions = {
  id: number
  name: string
  link: string
  icon: IconsNames
}

export type NameInputs =
  | 'type'
  | 'sides'
  | 'sideA'
  | 'sideB'
  | 'sideC'
  | 'sideD'
  | 'height'
  | 'diagonal'
  | 'angle'
