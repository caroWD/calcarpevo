import { CardBody } from '../atoms/index'
import { Button, Card } from '../molecules/index'

export type FigureType =
  | 'Cuadrado'
  | 'Rectángulo'
  | 'Triángulo'
  | 'Rombo'
  | 'Paralelogramo'
  | 'Trapecio'
  | 'Polígono'
  | 'Círculo'
  | 'Pirámide'
  | 'Cubo'
  | 'Paralelepípedo'
  | 'Esfera'
  | 'Cilindro'
  | 'Cono'

type Props = {
  figureType: FigureType
  figureImage: string
  alternativeText: string
  perimeterFormula?: string
  areaFormula?: string
  volumeFormula?: string
  onClick: () => void
}

export const FigureInfo = ({
  figureType,
  figureImage,
  alternativeText,
  perimeterFormula,
  areaFormula,
  volumeFormula,
  onClick,
}: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <Card title="Figura geométrica">
        <CardBody copy={figureType} figure={figureImage} figureText={alternativeText} />
      </Card>
      <Card title={!volumeFormula ? 'Formulas de perímetro y área' : 'Formulas de volumen'}>
        {!volumeFormula ? (
          <CardBody perimeterFormula={perimeterFormula} areaFormula={areaFormula} />
        ) : (
          <CardBody volumeFormula={volumeFormula} />
        )}
      </Card>
      <Button type="text" onClick={onClick}>
        Siguiente
      </Button>
    </section>
  )
}
