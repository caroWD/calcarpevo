import CardBody from '../atoms/CardBody'
import Button from '../molecules/Button'
import Card from '../molecules/Card'

type FigureType =
  | 'Cuadrado'
  | 'Rectángulo'
  | 'Triángulo'
  | 'Rombo'
  | 'Paralelogramo'
  | 'Trapecio'
  | 'Polígono'
  | 'Círculo'

type Props = {
  figureType: FigureType
  figureImage: string
  alternativeText: string
  perimeterFormula: string
  areaFormula: string
  onClick: () => void
}

const FigureInfo = ({
  figureType,
  figureImage,
  alternativeText,
  perimeterFormula,
  areaFormula,
  onClick,
}: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <Card title="Figura geométrica">
        <CardBody copy={figureType} figure={figureImage} figureText={alternativeText} />
      </Card>
      <Card title="Formulas de perímetro y área">
        <CardBody perimeterFormula={perimeterFormula} areaFormula={areaFormula} />
      </Card>
      <Button type="text" onClick={onClick}>
        Siguiente
      </Button>
    </section>
  )
}

export default FigureInfo
