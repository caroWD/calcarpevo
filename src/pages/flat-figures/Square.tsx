import { FigureInfo, Main, FigureForm, Result } from '@/components/organisms/index'
import Layout from '@/layouts/Layout'
import diagramSquare from '@/assets/diagram-square-geometric-figure.svg'
import { useState } from 'react'
import { NumberField, Button } from '@/components/molecules/index'
import { FormContextProvider } from '@/context/FormContextProvider'
import { ResultContextProvider } from '@/context/ResultContextProvider'

export const Square = () => {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <Layout>
      <Main>
        <ResultContextProvider>
          {step === 0 ? (
            <FigureInfo
              figureType="Cuadrado"
              figureImage={diagramSquare}
              alternativeText="Diagrama de figura geometrica cuadrada"
              perimeterFormula="P => a + a + a + a => 4a"
              areaFormula="A => a * a => a^2"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="square">
                <NumberField key={1} label="Defina 'a'" name="sides" placeholder="ej. 55" />
                <div key={2} className="flex gap-4 *:flex-1">
                  <Button type="text" onClick={prevStep}>
                    Atras
                  </Button>
                  <Button type="submit">Calcular</Button>
                </div>
              </FigureForm>
            </FormContextProvider>
          ) : (
            <Result>
              <Button type="text" onClick={prevStep}>
                Realizar otro calculo
              </Button>
            </Result>
          )}
        </ResultContextProvider>
      </Main>
    </Layout>
  )
}
