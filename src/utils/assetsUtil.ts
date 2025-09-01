import arrowBack from '@/assets/arrow-back-icon.svg'
import circle from '@/assets/circle-icon.svg'
import close from '@/assets/close-icon.svg'
import cone from '@/assets/cone-icon.svg'
import cube from '@/assets/cube-icon.svg'
import cylinder from '@/assets/cylinder-icon.svg'
import darkMode from '@/assets/dark-mode-icon.svg'
import diamond from '@/assets/diamond-icon.svg'
import flatFifure from '@/assets/flat-figure-icon.svg'
import lightMode from '@/assets/light-mode-icon.svg'
import moreVert from '@/assets/more-vert-icon.svg'
import parallelogram from '@/assets/parallelogram-icon.svg'
import polygon from '@/assets/polygon-icon.svg'
import pyramid from '@/assets/pyramid-icon.svg'
import rectangle from '@/assets/rectangle-icon.svg'
import solidFigure from '@/assets/solid-figure-icon.svg'
import sphere from '@/assets/sphere-icon.svg'
import square from '@/assets/square-icon.svg'
import trapeze from '@/assets/trapeze-icon.svg'
import triangle from '@/assets/triangle-icon.svg'
import logoLight from '@/assets/calcarpevo-logo-light.svg'
import logoDark from '@/assets/calcarpevo-logo-dark.svg'
import type { FigureOptions } from '@/models/types'

export const icons = {
  arrowBack,
  circle,
  close,
  cone,
  cube,
  cylinder,
  darkMode,
  diamond,
  flatFifure,
  lightMode,
  moreVert,
  parallelogram,
  polygon,
  pyramid,
  rectangle,
  solidFigure,
  sphere,
  square,
  trapeze,
  triangle,
}

export const logos = { logoLight, logoDark }

export const flatFigureOptions: FigureOptions[] = [
  { id: 1, name: 'Cuadrado', link: 'cuadrado', icon: 'square' },
  { id: 2, name: 'Rectángulo', link: 'rectangulo', icon: 'rectangle' },
  { id: 3, name: 'Triángulo', link: 'triangulo', icon: 'triangle' },
  { id: 4, name: 'Rombo', link: 'rombo', icon: 'diamond' },
  { id: 5, name: 'Paralelogramo', link: 'paralelogramo', icon: 'parallelogram' },
  { id: 6, name: 'Trapecio', link: 'trapecio', icon: 'trapeze' },
  { id: 7, name: 'Polígono', link: 'poligono', icon: 'polygon' },
  { id: 8, name: 'Círculo', link: 'circulo', icon: 'circle' },
]
