import { Button, NumberField } from '@/components/molecules'
import { FigureForm, FigureInfo, Main, Result } from '@/components/organisms'
import { FormContextProvider, ResultContextProvider } from '@/context'
import Layout from '@/layouts/Layout'
import { useState } from 'react'
import diagram from '@/assets/diagram-trapeze-geometric-figure.svg'

export const Trapeze = () => {
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
              figureType="Trapecio"
              figureImage={diagram}
              alternativeText="Diagrama de figura geometrica trapecio"
              perimeterFormula="P => a + b + c + d"
              areaFormula="A => ((a + b) / 2) * h"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="trapeze">
                <NumberField
                  key={1}
                  label="Defina 'a' (base mayor)"
                  name="sideA"
                  placeholder="ej. 35"
                />
                <NumberField
                  key={2}
                  label="Defina 'b' (base menor)"
                  name="sideB"
                  placeholder="ej. 55"
                />
                <NumberField key={3} label="Defina 'c'" name="sideC" placeholder="ej. 45" />
                <NumberField key={4} label="Defina 'd'" name="sideD" placeholder="ej. 65" />
                <NumberField
                  key={5}
                  label="Defina 'h' (altura)"
                  name="height"
                  placeholder="ej. 75"
                />
                <div key={6} className="flex gap-4 *:flex-1">
                  <Button type="text" onClick={prevStep}>
                    Atrás
                  </Button>
                  <Button type="submit">Calcular</Button>
                </div>
              </FigureForm>
            </FormContextProvider>
          ) : (
            <Result>
              <Button type="text" onClick={prevStep}>
                Realizar otro cálculo
              </Button>
            </Result>
          )}
        </ResultContextProvider>
      </Main>
    </Layout>
  )
}
