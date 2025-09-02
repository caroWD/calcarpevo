import type { JSX } from 'react'
import Card from '../molecules/Card'

type Props = {
  children: JSX.Element[]
}

const FigureForm = ({ children }: Props) => {
  const inputs = children.filter((child) => child.key !== children.length.toString())
  return (
    <section className="flex flex-col gap-4">
      <Card title="Datos del cuadrado">
        <form className="flex flex-col gap-4 p-4">{inputs.map((input) => input)}</form>
      </Card>
      {children[children.length - 1]}
    </section>
  )
}

export default FigureForm
