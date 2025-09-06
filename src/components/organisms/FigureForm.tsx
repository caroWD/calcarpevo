import { useContext, type JSX } from 'react'
import { Card } from '../molecules/index'
import { FormContext, type IFormContext } from '@/context/index'
import type { IconsNames } from '@/models/types'

type FigureNames =
  | 'cuadrado'
  | 'rectángulo'
  | 'triángulo'
  | 'rombo'
  | 'paralelogramo'
  | 'trapecio'
  | 'polígono'
  | 'círculo'
  | 'pirámide'
  | 'cubo'
  | 'paralelepípedo'
  | 'esfera'
  | 'cilindro'
  | 'cono'

type Props = {
  children: JSX.Element[]
  type: IconsNames
  figure: FigureNames
}

export const FigureForm = ({ children, type, figure }: Props) => {
  const { register, handleSubmit, onSubmit } = useContext(FormContext) as IFormContext

  const inputs = children.filter((child) => child.key !== children.length.toString())

  return (
    <section className="flex flex-col gap-4">
      <Card
        title={
          (figure !== 'pirámide' && figure !== 'esfera' ? 'Datos del ' : 'Datos de la ') + figure
        }
      >
        <form id="figureForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
          {inputs.map((input) => input)}
          <input {...register('type')} type="hidden" value={type} />
        </form>
      </Card>
      {children[children.length - 1]}
    </section>
  )
}
