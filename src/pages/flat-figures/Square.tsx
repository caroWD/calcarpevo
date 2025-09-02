import { FigureInfo, Main, FigureForm } from '@/components/organisms/index'
import Layout from '@/layouts/Layout'
import diagramSquare from '@/assets/diagram-square-geometric-figure.svg'
import { useState } from 'react'
import { NumberField, Button } from '@/components/molecules/index'

export const Square = () => {
  const [step, setStep] = useState(0)

  const addStep = () => {
    setStep(step + 1)
  }

  return (
    <Layout>
      <Main>
        {step === 0 ? (
          <FigureInfo
            figureType="Cuadrado"
            figureImage={diagramSquare}
            alternativeText="Diagrama de figura geometrica cuadrada"
            perimeterFormula="P => a + a + a + a => 4a"
            areaFormula="A => a * a => a^2"
            onClick={addStep}
          />
        ) : (
          <FigureForm>
            <NumberField
              key={1}
              label="Defina 'a'"
              value=""
              name="sideA"
              placeholder="ej. 55"
              onChange={() => {}}
            />
            <Button key={2} type="text" onClick={() => {}}>
              Calcular
            </Button>
          </FigureForm>
        )}
      </Main>
    </Layout>
  )
}
